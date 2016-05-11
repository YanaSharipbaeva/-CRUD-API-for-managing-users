'use strict';

var CreateEditView = Backbone.View.extend({
    className: 'infoForm',
    
    events: {
        'click .saveButton' : 'addUser',
        'click .cancelButton' : 'removeForm' ,
        'click .saveEditedInfo': 'editUser'
    },

    initialize: function () {
        this.$el.addClass('activeForm');
    },

    renderEditForm: function (user) {
        var template = _.template(tmp.editForm);
        this.$el.html(template ( this.model.toJSON() ));

        return this;
    },

    renderCreateForm: function () {
        var template = _.template(tmp.createForm);
        this.$el.append(template);

        return this;
    },


    editUser: function () {
        this.model.save(this.newUser());
        this.removeForm();
    },

    addUser: function () {
        var newUser = new User(this.newUser());
        this.collection.create(newUser);
        this.removeForm();
    },

    newUser: function () {
        var name = $('.name').val(),
            surname = $('.surname').val(),
            age = $('.age').val(),
            location = $('.location').val();

        return {
            name: name,
            surname: surname,
            age:age,
            location:location
        }
    },

    removeForm: function (){
        this.$el.remove();
        m.publish('Users: removeForm');
    }
});