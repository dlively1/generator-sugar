
({
    className: '<%= name %>-view',

    initialize: function(options) {
        this._super('initialize', [options]);
    },

    _renderHtml: function(ctx, options) {
        this._super('_renderHtml', [ctx, options]);
        //@todo -- override or remove
    },

    loadData: function(options) {
        //@todo -- override or remove
    },

    _dispose: function() {
        this._super('_dispose', []);
    }

})