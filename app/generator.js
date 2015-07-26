'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Generator = (function () {
  function Generator() {
    _classCallCheck(this, Generator);
  }

  Generator.prototype.sayHello = function sayHello() {
    this.log(this.say('Welcome to the amazing ' + this.chalk.green('NodeJS Module') + ' generator!'));
  };

  Generator.prototype.copyFiles = function copyFiles() {
    var _app = { app: this.appName };
    var _usernameGithub = { username: this.githubUsername };
    var _appNameAndUsernameGithub = { username: _usernameGithub.username, app: _app.app };

    this.fs.copy(this.templatePath('_index.js'), this.destinationPath('index.js'));
    this.fs.copy(this.templatePath('lib/_libIndex.js'), this.destinationPath('lib/index.js'));
    this.fs.copy(this.templatePath('tests/_app_test.js'), this.destinationPath('tests/app_test.js'));

    this.template('_package.json', 'package.json', _appNameAndUsernameGithub);
    this.template('_README.md', 'README.md', _appNameAndUsernameGithub);

    this.fs.copy(this.templatePath('_jshintrc'), this.destinationPath('.jshintrc'));
    this.fs.copy(this.templatePath('_.gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('_.npmignore'), this.destinationPath('.npmignore'));
    this.fs.copy(this.templatePath('_.travis.yml'), this.destinationPath('.travis.yml'));
  };

  Generator.prototype.installStuff = function installStuff() {
    var _installOpts = { skipInstall: this.options['skip-install'], bower: false, npm: true };

    this.installDependencies(_installOpts);
  };

  Generator.prototype.showPrompts = function showPrompts() {
    var _this = this;

    var done = this.async();

    var prompts = [{
      name: 'appName',
      message: 'What is the name of your module?',
      'default': 'an-awesome-name-goes-here'
    }, {
      name: 'githubUsername',
      message: 'What is your username on Github?',
      'default': 'an-awesome-username-goes-here'
    }];

    this.prompt(prompts, function (props) {
      _this.appName = props.appName;
      _this.githubUsername = props.githubUsername;

      done();
    });
  };

  return Generator;
})();

exports['default'] = Generator;
module.exports = exports['default'];