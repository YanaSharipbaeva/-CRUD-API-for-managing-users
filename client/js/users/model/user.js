'use strict';

var User = Backbone.Model.extend({
    urlRoot: '/users',
    defaults: {
        name: 'John',
        surname: 'Doe',
        age: '25',
        location: 'Iceland',
        photo: '/img/default-photo.png'
    }
});