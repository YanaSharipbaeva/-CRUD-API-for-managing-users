"use strict";

var UserView = Backbone.View.extend({
    tagName: 'li',
    className: 'userName',
    template: _.template(userTemplates.userTpl),
 
    initialize: function () {
        this.render();
        this.model.on("destroy", this.removeEl, this);
        this.model.on("change", this.render, this);
    },
 
    render: function () {
        this.$el.html( this.template( this.model.toJSON() ));
        return this;
    },

    events: {
      'click .editBtn': 'editUser', 
      'click .deleteBtn': 'deleteUser',
      'click .usersName' : 'showAllInfo'
    },

    deleteUser: function () {
        this.model.destroy();
    },

    removeEl: function () {
        this.$el.remove();
        m.publish('Users: removeUser');
    },

    editUser: function () {
        m.publish('Users: edit-request', this.model);
    },

    showAllInfo: function () {
        m.publish('Users: info-request', this.model);
    }
});
