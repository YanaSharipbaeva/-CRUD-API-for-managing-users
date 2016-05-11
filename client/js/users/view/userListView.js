'use strict';

var UserListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'usersList',
    template: _.template(userTemplates.userListTpl),
    userCount: 0,
    page:0,

    events: {
        'click .addBtn': 'showForm'
    },

    initialize: function () {
        this.collection = new UserList();
        this.collection.fetch();
        this.collection.on('add', this.createUser, this);

        m.subscribe('Users: removeUser', this.changeUserCount.bind(this));
        m.subscribe('Users: show-next-page', this.showNextPage.bind(this));
        m.subscribe('Users: show-previous-page', this.showPreviousPage.bind(this))
    },

    render: function () {
        this.collection.each(this.createUser, this);
        this.$el.html( this.template());

        return this;   
    },

    createUser: function (user) {
        this.userView;
        this.userView = new UserView({
            model: user
        });

        this.userCount++;
        if (this.userCount > 9 ) { // add pagination, if number of users is more than 10
            this.splitUsers();
        } else {
            this.$el.append(this.userView.el); 
        }
    },

    splitUsers: function () {
        var tmp = this.collection.slice(), 
            chunk,
            pageElems = [];
        while (tmp.length > 0) {
            chunk = tmp.splice(0, 9);
            pageElems.push(chunk);   // divide into groups of 10 users
        }
        this.pageElems = pageElems;
        this.updateList(this.pageElems); // show chosen group 
    },

    updateList: function (pageElems) {   //show some of groups(first, previous, next)
        this.$el.children().remove();
        this.$el.html( this.template());
        this.pageElems[this.page].forEach(this.updateOne, this);
        this.paginator = new PaginatorView();
        this.$el.append(this.paginator.render().el);
    },

    updateOne: function (user) {
        this.userView;
        this.userView = new UserView({
            model: user
        });

        this.$el.append(this.userView.el); 
    },

    showPreviousPage: function () {
        if (this.page > 0) {
            this.page--;
            this.updateList(); // show previous group of users
        }
    },

    showNextPage: function () {
        if (this.page < this.pageElems.length - 1) {
            this.page++;
            this.updateList(); // show next group of users
        }
    },

    showForm: function () { 
        m.publish('Users: create-request', this.collection);
    },

    changeUserCount: function () {  // helper
        this.userCount--;
        console.log(this.pageElems.length);
        if (this.userCount <= 9 && this.pageElems.length === this.page) {
            this.paginator.remove();
        }
    }
});