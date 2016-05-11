'use strict';

var UserInfoView = Backbone.View.extend({
    className: 'userInfo',

    events: {
    	'click .closeInfo': 'removeInfo'
    },

    render: function () {
       	var template = _.template(tmp.userInfo);
        this.$el.html(template ( this.model.toJSON() ));


    return this;
    },

    removeInfo: function () {
        this.$el.remove();
    	m.publish('Users: removeForm');
    }

    
});