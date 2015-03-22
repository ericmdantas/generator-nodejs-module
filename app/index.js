"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");

var NodeJsModule = (function (_yeoman$generators$Base) {
  function NodeJsModule(args, options, config) {
    _classCallCheck(this, NodeJsModule);

    yeoman.generators.Base.apply(this, arguments);
  }

  _inherits(NodeJsModule, _yeoman$generators$Base);

  NodeJsModule.prototype.initializing = function initializing() {
    this.pkg = require("../package.json");
  };

  NodeJsModule.prototype.prompting = function prompting() {
    this.log(yosay("Welcome to the amazing" + chalk.green(" NodeJS Module ") + " generator!"));
  };

  NodeJsModule.prototype.writing = function writing() {
    var _app = { app: this.appName };
    var _usernameGithub = { username: this.githubUsername };
    var _appNameAndUsernameGithub = { username: _usernameGithub.username, app: _app.app };

    this.fs.copy(this.templatePath("_index.js"), this.destinationPath("index.js"));
    this.fs.copy(this.templatePath("lib/_libIndex.js"), this.destinationPath("lib/index.js"));
    this.fs.copy(this.templatePath("tests/_app_test.js"), this.destinationPath("tests/app_test.js"));

    this.template("_package.json", "package.json", _appNameAndUsernameGithub);
    this.template("_README.md", "README.md", _appNameAndUsernameGithub);

    this.fs.copy(this.templatePath("jshintrc"), this.destinationPath(".jshintrc"));
    this.fs.copy(this.templatePath(".gitignore"), this.destinationPath(".gitignore"));
    this.fs.copy(this.templatePath(".npmignore"), this.destinationPath(".npmignore"));
    this.fs.copy(this.templatePath(".travis.yml"), this.destinationPath(".travis.yml"));
    this.fs.copy(this.templatePath("editorconfig"), this.destinationPath(".editorconfig"));
  };

  NodeJsModule.prototype.install = function install() {
    var _installOpts = { skipInstall: this.options["skip-install"], bower: false, npm: true };

    this.installDependencies(_installOpts);
  };

  NodeJsModule.prototype.showPrompts = function showPrompts() {
    var done = this.async();

    var prompts = [{
      name: "appName",
      message: "What is the name of your module?",
      "default": "an-awesome-name-goes-here"
    }, {
      name: "githubUsername",
      message: "What is your username on Github?",
      "default": "an-awesome-username-goes-here"
    }];

    this.prompt(prompts, (function (props) {
      this.appName = props.appName;
      this.githubUsername = props.githubUsername;

      done();
    }).bind(this));
  };

  return NodeJsModule;
})(yeoman.generators.Base);

module.exports = NodeJsModule;
