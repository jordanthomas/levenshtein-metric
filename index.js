(function (root) {
  'use strict';

  function extend(a, b) {
    for (var property in b) {
      if (b.hasOwnProperty(property)) {
        a[property] = b[property];
      }
    }

    return a;
  }

  function distance(s, t, options) {
    var defaults = { caseSensitive: true };
    var settings = extend(defaults, options);

    // Exit early if identical.
    if (s === t) {
      return 0;
    }

    if (s.length === 0) {
      return s.length;
    }

    if (t.length === 0) {
      return t.length;
    }

    // Convert to upper if case-sensitive is false.
    if (!settings.caseSensitive) {
      s = s.toUpperCase();
      t = t.toUpperCase();
    }

    var v0 = new Array(t.length + 1);
    var v1 = new Array(t.length + 1);

    for (var i = 0; i < v0.length; i++) {
      v0[i] = i;
    }

    for (var i = 0; i < s.length; i++) {
      v1[0] = i + 1;

      for (var j = 0; j < t.length; j++) {
        var cost = s[i] === t[j] ? 0 : 1;
        v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1], v0[j] + cost);
      }

      for (var j = 0; j < v0.length; j++) {
        v0[j] = v1[j];
      }
    }

    return v1[t.length];
  }

  if (typeof define === 'function' && define.amd) {
    define([], distance);
  } else if (typeof exports === 'object') {
    module.exports = distance;
  } else {
    root.distance = distance;
  }
})(this);
