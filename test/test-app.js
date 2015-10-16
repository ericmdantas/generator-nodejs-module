import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import os from 'os';

describe('nodejs-module:app', () => {
  before((done) => {
    helpers
      .run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompts({ 'appName': 'my-app', 'githubUsername': 'my-username'})
      .on('end', done);
  });

  it('creates files', () => {
    var _files = [
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
