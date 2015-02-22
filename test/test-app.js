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
      .on('end', done);
  });

  it('creates files', function ()
  {
    assert.file([
      '.editorconfig',
      '.jshintrc',
      '.gitignore',
      '.npmignore',
      '.travis.yml',
      'package.json',
      'index.js',
      'lib/index.js',
      'tests/app_test.js'
    ]);
  });
});
