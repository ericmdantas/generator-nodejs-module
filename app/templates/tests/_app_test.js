"use strict";

var expect = require('chai').expect;
var myApp = require('../lib/index');

describe('my awesome app test', function()
{
  it('should be true', function()
  {
      expect(true).to.be.true;
  })

  it('should greet the world', function()
  {
    expect(myApp()).to.equal('hello world!');
  })
})
