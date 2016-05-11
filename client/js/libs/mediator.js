'use strict';
function Mediator () {
	var channels = {};
    this.subscribe = function (channel, fn) {
        if (!channels[channel]) channels[channel] = [];
        channels[channel].push({callback: fn});
        return this;
    };

    this.publish = function (channel) {
        if (!channels[channel]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        channels[channel].forEach(function (item) {
            item.callback.apply(this, args);
        });
    };
           
    return this;
};
