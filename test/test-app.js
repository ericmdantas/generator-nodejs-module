'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('nodejs-module:app', function ()
{
  before(function (done)
  {
    helpers
      .run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompts({ 'appName': 'my-app', 'githubUsername': 'my-username'})
      .on('end', done);
  });

  it('creates files', function ()
  {
    var _files = [
      '.editorconfig',
      '.jshintrc',
      '.gitignore',
      '.npmignore',
      '.travis.yml',
      'package.json',
      'index.js',
      'lib/index.js',
      'tests/app_test.js'
    ];

    assert.file(_files);
  });
});
