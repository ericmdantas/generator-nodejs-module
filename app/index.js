"use strict";

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _yeomanGenerator = require('yeoman-generator');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _generator = require('./generator');

var _generator2 = _interopRequireDefault(_generator);

var NodeJsModule = (function (_Base) {
    _inherits(NodeJsModule, _Base);

    function NodeJsModule(args, options, config) {
        _classCallCheck(this, NodeJsModule);

        _Base.call(this, args, options, config);
        this.say = _yosay2['default'];
        this.chalk = _chalk2['default'];

        this.gen = new _generator2['default']();
    }

    NodeJsModule.prototype.initializing = function initializing() {
        this.pkg = require('../package.json');
    };

    NodeJsModule.prototype.prompting = function prompting() {
        this.gen.sayHello.call(this);
    };

    NodeJsModule.prototype.writing = function writing() {
        this.gen.copyFiles.call(this);
    };

    NodeJsModule.prototype.install = function install() {
        this.gen.installStuff.call(this);
    };

    NodeJsModule.prototype.showPrompts = function showPrompts() {
        this.gen.showPrompts.call(this);
    };

    return NodeJsModule;
})(_yeomanGenerator.Base);

exports['default'] = NodeJsModule;
module.exports = exports['default'];