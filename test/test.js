var distance = typeof require === 'function' ? require('..') : window.distance;
var assert = typeof require === 'function' ? require('chai').assert : window.chai.assert;

describe('distance', function() {
  it('should return a number', function() {
    var value = distance('LEVENSHTEIN', 'LEVENSHTEIN');
    assert.typeOf(value, 'number');
  });

  it('should return the right distance', function() {

    var value1 = distance('LEVENSHTEIN', 'ELVENSHTEIN');
    assert.equal(value1, 1);

    var value2 = distance('DISTANCE', 'SDTIANCE');
    assert.equal(value2, 2);

    var value3 = distance('METRIC', 'EMRTCI');
    assert.equal(value3, 3);
  });
});
