'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var sugarUtils = require('../utils/sugarUtils');
var SugarPath = sugarUtils.sugarPaths;

var ButtonGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        this.log(chalk.bgBlue('Starting your custom Field button ...'));
    },

    askForGlobal: function() {
        var done = this.async();

        var prompts = [
            {
                type: 'confirm',
                name: 'isGlobal',
                message: 'Is this a global Button?',
                default: true
            }
        ];

        this.prompt(prompts, function (props) {
            //Answers
            this.isGlobal = props.isGlobal;


            done();
        }.bind(this));
    },

    askForModule: function () {

        if(! this.isGlobal) {

            var done = this.async();
            var prompts = [
                {
                    name: 'moduleView',
                    message: 'What is the name of the module ?'
                }
            ];

            this.prompt(prompts, function (props) {
                //Answers
                if(props.moduleView) {
                    this.moduleView = props.moduleView;
                }

                done();
            }.bind(this));

        }

    },

  files: function () {

      var basePath = sugarUtils.getStartPath();
      if(this.isGlobal) {
          basePath += SugarPath.FIELDS  + this.name + '/';
          this.mkdir(basePath);
      }
      else {
          basePath = SugarPath.MODULE + this.moduleView + '/' + SugarPath.FIELDS + this.name + '/';
          this.mkdir(basePath);
      }

      this.copy('_ButtonFieldController.js', basePath + this.name + '.js');

  }
});

module.exports = ButtonGenerator;