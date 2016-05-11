'use strict';

var PaginatorView = Backbone.View.extend({
    className: 'paginator',
    lastPage: 0,
   

    events: {
    	'click .previous': 'showPreviousUsers',
    	'click .next': 'showNextUsers',

    },

    render: function () {
    	var template = _.template(tmp.paginator);
        this.$el.html(template());

    return this;
    },

    removePaginator: function () {
        this.$el.remove();
    },

    showPreviousUsers: function () {
        m.publish('Users: show-previous-page');
    	
    },

    showNextUsers: function () {
        m.publish('Users: show-next-page');
    } 
});