# Levenshtein Metric

A metric for measuring the edit difference in two strings. It counts the
minimum number of single-character edits needed to make the strings match.
Therefore the lower the return value the more alike the two are, down to zero,
denoting an exact match.

## Install

Install in your Node project using npm as usual; `npm i levenshtein-metric`. It
also works in the browser, just include the source within `index.js` in your
project however you prefer. Note that the `distance` function will be added to
the global scope if it's not included with a tool like
[http://browserify.org](Browserify).

## Example Usage

```
var distance = require('levenshtein-metric');

distance('match', 'match');
// 0

distance('kitten', 'sitting');
// 3
```

### Case-Insensitive

You can also compare case-insensitively with an additional options argument.

```
distance('match', 'MATCH', { caseSensitive: false });
// 0
```
