
({
    extendsFrom: 'RowactionField',

    initialize: function (options) {
        app.view.invokeParent(this, {type: 'field', name: 'rowaction', method:'initialize', args:[options]});
        this.type = 'rowaction';
    },

    rowActionSelect: function() {
        //@todo -- handle button click
    }

})