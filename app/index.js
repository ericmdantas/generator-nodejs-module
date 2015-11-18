'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _yeomanGenerator = require('yeoman-generator');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _generator = require('./generator');

var _generator2 = _interopRequireDefault(_generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NodeJsModule = (function (_Base) {
    _inherits(NodeJsModule, _Base);

    function NodeJsModule(args, options, config) {
        _classCallCheck(this, NodeJsModule);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NodeJsModule).call(this, args, options, config));

        _this.say = _yosay2.default;
        _this.chalk = _chalk2.default;

        _this.gen = new _generator2.default();
        return _this;
    }

    _createClass(NodeJsModule, [{
        key: 'initializing',
        value: function initializing() {
            this.pkg = require('../package.json');
        }
    }, {
        key: 'prompting',
        value: function prompting() {
            this.gen.sayHello.call(this);
        }
    }, {
        key: 'writing',
        value: function writing() {
            this.gen.copyFiles.call(this);
        }
    }, {
        key: 'install',
        value: function install() {
            this.gen.installStuff.call(this);
        }
    }, {
        key: 'showPrompts',
        value: function showPrompts() {
            this.gen.showPrompts.call(this);
        }
    }]);

    return NodeJsModule;
})(_yeomanGenerator.Base);

exports.default = NodeJsModule;