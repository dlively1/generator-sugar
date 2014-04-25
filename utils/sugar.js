var fs = require('fs'),
    util = require('util'),
    path = require('path'),
    _s = require('underscore.string');


function classify(className) {
    return _s.classify(className);
}


function makeApiClassName(name) {

    if(! _s.endsWith(name,'Api')) {
        name += 'Api';
    }


    return name;
}

module.exports = {

    getApiClassName : makeApiClassName

};