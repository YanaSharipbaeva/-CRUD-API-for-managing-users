"use strict";

var UserList = Backbone.Collection.extend({
    model: User,
    url: 'users.json'
});