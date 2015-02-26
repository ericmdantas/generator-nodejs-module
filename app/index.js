"use strict";

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var NodeJsModule = function(args, options, config)
{
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(NodeJsModule, yeoman.generators.Base);

NodeJsModule.prototype.initializing = function()
{
  this.pkg = require('../package.json');
}

NodeJsModule.prototype.prompting = function()
{
  this.log(yosay('Welcome to the ' + chalk.red(' NodeJS Module ') + ' generator! =]'));
}

NodeJsModule.prototype.writing = function()
{
  this.fs.copy(this.templatePath('_index.js'), this.destinationPath('index.js'));
  this.fs.copy(this.templatePath('_libIndex.js'), this.destinationPath('lib/index.js'));
  this.fs.copy(this.templatePath('_app_test.js'), this.destinationPath('tests/app_test.js'));
  this.fs.copy(this.templatePath('_package.json'), this.destinationPath('package.json'));

  this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
  this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
  this.fs.copy(this.templatePath('.npmignore'), this.destinationPath('.npmignore'));
  this.fs.copy(this.templatePath('.travis.yml'), this.destinationPath('.travis.yml'));
  this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
}

NodeJsModule.prototype.install = function()
{
  this.installDependencies({skipInstall: this.options['skip-install']});
}

module.exports = NodeJsModule; 
