{%- set cc = cookiecutter -%}
var chai = require('chai');
var Ivoire = require("./lib/ivoire-{{ cc.repo_name }}");

chai.should();

describe('ivoire-{{ cc.repo_name }}', function () {
  var seed = 42
  var ivoire;

  beforeEach(function(){
    ivoire = new Ivoire({seed: seed});
  });

  describe('#method()', function () {
    it('should TODO: write tests!', function () {
      (2 + 2).should.equal(5)
    });
  });
});
