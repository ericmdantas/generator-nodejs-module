import {Base} from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';
import Generator from './generator';

export default class NodeJsModule extends Base {
    constructor(args, options, config) {
        super(args, options, config);
        this.say = yosay;
        this.chalk = chalk;

        this.gen = new Generator();
    }

    initializing() {
      this.pkg = require('../package.json');
    }

    prompting() {
      this.gen.sayHello.call(this);
    }

    writing() {
      this.gen.copyFiles.call(this);
    }

    install() {
      this.gen.installStuff.call(this);
    }

    showPrompts() {
      this.gen.showPrompts.call(this);
    }
}
