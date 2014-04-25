'use strict';
var util = require('util');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');
var sugarUtils = require('../utils/sugarUtils');
var SugarPath = sugarUtils.sugarPaths;


var LogicHookGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    this.log(chalk.bgBlue('Starting your custom LogicHook ' + this.name));
  },

  getHookDefs: function() {
      var done = this.async();

      var prompts = [
          {
              name: 'moduleView',
              message: 'What is the name of the module ?'
          },
          {
              name: 'hookDescription',
              message: 'Description of Logic Hook'
          },
          {
              name: 'hookIndex',
              message: 'Logic Hook order',
              default: 11
          },
          {
              name: 'className',
              message: 'Logic Hook Class Name'
          },
          {
              name: 'method',
              message: 'Logic Hook Method'
          }
      ];

      this.prompt(prompts, function (props) {

          //Answers
          this.hookDescription = props.hookDescription;
          this.hookIndex = props.hookIndex;
          this.classPath = props.classPath;

          this.className = props.className;

          if(this.className.indexOf(".php") > -1) {
              this.className = this.className.split('.').shift();
          }

          this.method = props.method;
          this.hookType = props.hookType;
          this.moduleView = props.moduleView;

          done();
      }.bind(this));
  },

  finalDetails: function () {
      var done = this.async();
      var self = this;

      var hookOptions = ['before_save','after_save','after_retrieve'];

      var prompts = [
          {
              name: 'classPath',
              message: 'Logic Hook Class Path',
              default: function () {
                  return 'custom/modules/' + self.moduleView + '/hooks/' + self.className + '.php';
              }
          },
          {
              type: 'list',
              name: 'hookType',
              message: 'Select Logic Hook Type',
              choices: hookOptions
          }
      ];

      this.prompt(prompts, function (props) {

          //Answers
          this.classPath = props.classPath;
          this.hookType = props.hookType;

          done();
      }.bind(this));
  },

  files: function () {

      var basePath = sugarUtils.getStartPath();
      basePath = SugarPath.EXTENSION + 'modules/' + this.moduleView + SugarPath.HOOKS;
      this.mkdir(basePath);

      this.template('_HookExtension.php', basePath + this.name + '.php');
      this.template('_HookClass.php', this.classPath);

  }
});

module.exports = LogicHookGenerator;