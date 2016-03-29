/**
 * Created by apple on 3/17/16.
 */
$(document).ready(function () {
    new Clipboard('.btn', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.btn-group', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.btn-group-vertical', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.badge2p', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.label', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.alert', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.list-group', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.panel', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.dropdown', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    var b_well = $('#Well_tab').children()[0];
    new Clipboard(b_well, {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.well-sm', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

    new Clipboard('.well-lg', {
        text: function(trigger) {
            return trigger.outerHTML;
        }
    });

});

// TODO add a sizable table
