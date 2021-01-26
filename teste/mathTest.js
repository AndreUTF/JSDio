const assert = require('assert');
cons Math = require('../src/math.js');

describe('Math class', function() {
    it('Sum two numbers', function() {
        assert.equal(math.sum(5, 5), 10);
    });
});