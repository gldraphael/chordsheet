const chordRegex = require('../chord-regex')
const tape = require('tape')

tape('regex test', function (test) {
  test.plan(1)

  const myChord = "[C]"
  var match = chordRegex.exec(myChord)[1]

  test.equal(match, 'C')
});
