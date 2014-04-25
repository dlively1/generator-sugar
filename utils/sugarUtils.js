'use strict';

var sugarPaths = {
    GLOBAL: 'custom/',
    MODULE: 'custom/modules/',
    CLIENT: 'clients/base/',
    FIELDS: 'clients/base/fields/',
    VIEWS: 'clients/base/views/',
    LAYOUTS: 'clients/base/layouts/',
    API: 'clients/base/api/',
    FILTERS: 'clients/base/filters/',
    EXTENSION: 'custom/Extension/',
    HOOKS: '/Ext/LogicHooks/'
};

function getStartPath() {
    //@todo -- check the current directory for a config.php file and route appropriately
    return sugarPaths.GLOBAL;
}


module.exports = {
    sugarPaths:sugarPaths,
    getStartPath: getStartPath
};