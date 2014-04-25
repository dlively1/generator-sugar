'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var SugarGenerator = yeoman.generators.Base.extend({
    init: function () {

    },

    askFor: function () {
        var done = this.async();

        // have Yeoman greet the user
        this.log(this.yeoman);
        //@todo -- create custom generator welcome message removing the default yeoman

        var prompts = [
            {
                name: 'packageName',
                message: 'What is the package Name?'
            },
            {
                name: 'packageAuthor',
                message: 'Who is the author of this package?',
                default: function() {
                    var userProfile = process.env.USERPROFILE;

                    if(userProfile) {
                        var pieces = userProfile.split('\\');
                        if(pieces.length > 0) {
                            //@todo - this is kind of windows based, before releasing this tool change this up
                            //the last part should be the username
                            return pieces.pop();
                        }
                    }

                    if(process.env.USER) {
                        return process.env.USER;
                    }

                    return '';
                }
            },
            {
                name: 'packageDescription',
                message: 'Package Description'
            },
            {
                name: 'packageVersion',
                message: 'Package Version Number?',
                default: '1.0'
            }
        ];

        this.prompt(prompts, function (props) {
            //Answers
            this.packageName = props.packageName;
            this.packageDescription = props.packageDescription;
            this.packageVersion = props.packageVersion;
            this.packageAuthor = props.packageAuthor;

            //default stuff
            var rightMeow = new Date(),
                month = rightMeow.getMonth() + 1;
            this.today = month + '/' + rightMeow.getDate() + '/' + rightMeow.getFullYear();

            done();
        }.bind(this));
    },

    app: function () {
        this.mkdir('custom');

        this.template('_manifest.php', 'manifest.php');
    }


});

module.exports = SugarGenerator;