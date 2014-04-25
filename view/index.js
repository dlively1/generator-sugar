'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var sugarUtils = require('../utils/sugarUtils');
var SugarPath = sugarUtils.sugarPaths;


var ViewGenerator = yeoman.generators.NamedBase.extend({

  init: function () {
    this.log(chalk.bgBlue('Starting your custom View ' + this.name));
  },
  askForGlobal: function() {
      var done = this.async();

      var prompts = [
          {
              type: 'confirm',
              name: 'isGlobal',
              message: 'Is this a global view?',
              default: true
          },
          {
              type: 'confirm',
              name: 'makeMetadata',
              message: 'Generate Metadata File?',
              default: true
          },
          {
              type: 'confirm',
              name: 'makeTemplate',
              message: 'Generate Handlebar Template?',
              default: true
          },
          {
              type: 'confirm',
              name: 'makeController',
              message: 'Generate View Controller Template?',
              default: true
          }
      ];

      this.prompt(prompts, function (props) {
          //Answers
          this.isGlobal = props.isGlobal;
          this.makeMetadata = props.makeMetadata;
          this.makeTemplate = props.makeTemplate;
          this.makeController = props.makeController;

          done();
      }.bind(this));
  },

  askForModule: function () {

        if(! this.isGlobal) {

            var done = this.async();
            var prompts = [
                {
                    name: 'moduleView',
                    message: 'What is the name of the module?'
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

        var basePath = SugarPath.GLOBAL;
        if(this.isGlobal) {
            basePath += SugarPath.VIEWS  + this.name + '/';
            this.mkdir(basePath);
        }
        else {
            basePath = SugarPath.MODULE + this.moduleView + '/' + SugarPath.VIEWS + this.name + '/';
            this.mkdir(basePath);
        }

        if(this.makeController) {
            this.template('_ViewClass.js', basePath + this.name + '.js');
        }

        if(this.makeTemplate) {
            this.template('_HandlebarTemplate.hbs', basePath + this.name + '.hbs');
        }

        if(this.makeMetadata) {
            this.template('_MetadataFile.php', basePath + this.name + '.php');
        }

    }


});

module.exports = ViewGenerator;