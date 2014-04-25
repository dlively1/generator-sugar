'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var chalk = require('chalk');
var sugarUtils = require('../utils/sugarUtils');
var SugarPath = sugarUtils.sugarPaths;


var FieldGenerator = yeoman.generators.NamedBase.extend({
    init: function () {
        this.log(chalk.bgBlue('Starting your custom Field ...'));
    },

    askForGlobal: function () {
        var done = this.async();

        var templateOptions = ['list','edit','detail'];

        var prompts = [
            {
                type: 'confirm',
                name: 'isGlobal',
                message: 'Is this a global Field?',
                default: true
            },
            {
                type: 'checkbox',
                name: 'templateTypes',
                message: 'Which templates do you need?',
                choices: templateOptions
            }
        ];

        this.prompt(prompts, function (props) {
            //Answers
            this.isGlobal = props.isGlobal;
            this.templateTypes = props.templateTypes;

            done();
        }.bind(this));
    },

    askForModule: function () {

        if (!this.isGlobal) {

            var done = this.async();
            var prompts = [
                {
                    name: 'moduleView',
                    message: 'What is the name of the module ?'
                }
            ];

            this.prompt(prompts, function (props) {
                //Answers
                if (props.moduleView) {
                    this.moduleView = props.moduleView;
                }

                done();
            }.bind(this));

        }

    },

    files: function () {
        var basePath = sugarUtils.getStartPath(),
            self = this;

        if (this.isGlobal) {
            basePath += SugarPath.FIELDS + this.name + '/';
            this.mkdir(basePath);
        }
        else {
            basePath = SugarPath.MODULE + this.moduleView + '/' + SugarPath.FIELDS + this.name + '/';
            this.mkdir(basePath);
        }

        this.copy('_FIELD.js', basePath + this.name + '.js');

        if(! _.isEmpty(this.templateTypes)) {

            _.each(this.templateTypes, function(name, idx) {
                self.copy('_template.hbs', basePath + name + '.hbs');
            });

        }
    }
});

module.exports = FieldGenerator;