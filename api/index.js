'use strict';
var yeoman = require('yeoman-generator');
var sugar = require('../utils/sugar');
var chalk = require('chalk');
var sugarUtils = require('../utils/sugarUtils');
var SugarPath = sugarUtils.sugarPaths;


var ApiGenerator = yeoman.generators.NamedBase.extend({

  init: function () {
    this.className = sugar.getApiClassName(this.name);
    this.log(chalk.bgBlue('Generating custom API class ' + this.className));
  },

  createEndpoint: function () {
    var basePath = sugarUtils.getStartPath();
        basePath += SugarPath.API + '/';

    this.mkdir(basePath);
    this.template('_TemplateApi.php', basePath + this.className + '.php');
  }


});

module.exports = ApiGenerator;