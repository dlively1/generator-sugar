
var fs = requre('fs'),
    path = require('path');

var Config = module.exports = function(locals, globals) {

    this.filename = '.yosugar';

    // Load files
    this.global = this.load(path.join(process.env.HOME  || process.env.USERPROFILE, this.filename)) || {};

    // Set initial data
    if (globals) this.setGlobal(globals);
};


// Set global config values
Config.prototype.setGlobal = function(key, val) {
    if (typeof val !== 'undefined') {
        // Set a single key
        this.global[key] = val;
    } else {
        // Set multiple keys
        for (var i in key) this.global[i] = key[i];
    }
};

// Get config values, locals first
Config.prototype.get = function(key) {
    // Get a single key
    if (key) {
        if (typeof this.local[key] !== 'undefined') {
            return this.local[key];
        }
        if (typeof this.global[key] !== 'undefined') {
            return this.global[key];
        }
        return;
    }

    // Get all data
    var data = {};
    for (var g in this.global) data[g] = this.global[g];
    return data;
};

// Write the config to file
Config.prototype.write = function(filepath, data) {
    filepath = filepath || this.filename;
    data = data || this.get();
    fs.writeFileSync(filepath, JSON.stringify(data, null, '\t'));
};

// Load a config file
Config.prototype.load = function(filepath) {
    filepath = filepath || this.filename;
    if (fs.existsSync(filepath)) {
        var content = fs.readFileSync(filepath, {encoding: 'utf8'});
        return JSON.parse(content);
    }
    return null;
};