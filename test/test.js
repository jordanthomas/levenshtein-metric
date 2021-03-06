var distance = typeof require === 'function' ? require('..') : window.distance;
var assert = typeof require === 'function' ? require('chai').assert : window.chai.assert;

describe('distance', function() {
  it('should return a number', function() {
    var value = distance('LEVENSHTEIN', 'LEVENSHTEIN');
    assert.typeOf(value, 'number');
  });

  it ('should return zero if the strings are equal', function() {
    var zero = distance('EQUAL', 'EQUAL');
    assert.equal(zero, 0);
  });

  it('should return the right distance', function() {
    var value1 = distance('LEVENSHTEIN', 'ELVENSHTEIN');
    assert.equal(value1, 1);

    var value2 = distance('DISTANCE', 'SDTIANCE');
    assert.equal(value2, 2);

    var value1 = distance('KITTEN', 'SITTING');
    assert.equal(value1, 3);
  });

  it ('should return the length of the non-empty argument', function() {
    var test     = 'teststring';
    var firstArg = distance(test, '');
    var secArg   = distance('', test);

    assert.equal(firstArg, test.length);
    assert.equal(secArg, test.length);
  });

  it('should should ignore case when asked', function() {
    var on  = distance('lEvEnShTeIn', 'LeVeNsHtEiN', { caseSensitive: false });
    var off = distance('levenshtein', 'levenshtein');
    assert.equal(on, off);
  });
});
