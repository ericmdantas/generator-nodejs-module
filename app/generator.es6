export default class Generator {

  sayHello() {
    this.log(this.say(`Welcome to the amazing ${this.chalk.green('NodeJS Module')} generator!`));
  }

  copyFiles() {
      var _app = {app: this.appName};
      var _usernameGithub = {username: this.githubUsername};
      var _appNameAndUsernameGithub = {username: _usernameGithub.username, app: _app.app};

      this.fs.copy(this.templatePath('_index.js'), this.destinationPath('index.js'));
      this.fs.copy(this.templatePath('lib/_libIndex.js'), this.destinationPath('lib/index.js'));
      this.fs.copy(this.templatePath('tests/_app_test.js'), this.destinationPath('tests/app_test.js'));

      this.template('_package.json', 'package.json', _appNameAndUsernameGithub);
      this.template('_README.md', 'README.md', _appNameAndUsernameGithub);

      this.fs.copy(this.templatePath('_jshintrc'), this.destinationPath('.jshintrc'));
      this.fs.copy(this.templatePath('_.gitignore'), this.destinationPath('.gitignore'));
      this.fs.copy(this.templatePath('_.npmignore'), this.destinationPath('.npmignore'));
      this.fs.copy(this.templatePath('_.travis.yml'), this.destinationPath('.travis.yml'));
      this.fs.copy(this.templatePath('_editorconfig'), this.destinationPath('.editorconfig'));
  }

  installStuff() {
    var _installOpts = {skipInstall: this.options['skip-install'], bower: false, npm: true};

    this.installDependencies(_installOpts);
  }

  showPrompts() {
    var done = this.async();

    var prompts = [
      {
        name: 'appName',
        message: 'What is the name of your module?',
        default: 'an-awesome-name-goes-here'
      },
      {
        name: 'githubUsername',
        message: 'What is your username on Github?',
        default: 'an-awesome-username-goes-here'
      }
    ];

    this.prompt(prompts, props => {
      this.appName = props.appName;
      this.githubUsername = props.githubUsername;

      done();

    });
  }
}
