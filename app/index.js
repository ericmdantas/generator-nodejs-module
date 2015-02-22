"use strict";

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function ()
  {
    this.pkg = require('../package.json');
  },

  prompting: function ()
  {
    this.log(yosay('Welcome to the ' + chalk.red(' NodeJS Module ') + ' generator! =]'));
  },

  writing: {
    app: function ()
    {
      this.fs.copy(this.templatePath('_index.js'), this.destinationPath('index.js'));
      this.fs.copy(this.templatePath('_libIndex.js'), this.destinationPath('lib/index.js'));
      this.fs.copy(this.templatePath('_app_test.js'), this.destinationPath('tests/app_test.js'));
      this.fs.copy(this.templatePath('_package.json'), this.destinationPath('package.json'));
    },

    projectfiles: function ()
    {
      this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
      this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
      this.fs.copy(this.templatePath('.npmignore'), this.destinationPath('.npmignore'));
      this.fs.copy(this.templatePath('.travis.yml'), this.destinationPath('.travis.yml'));
      this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
    }
  },

  install: function()
  {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
