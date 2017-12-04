const chordRegex = require('../chord-regex')
const tape = require('tape')

tape('regex test', function (test) {

  let chords = [
    'C', 'D', 'E', 'F', 'G', 'A', 'B', // white keys
    'C#', 'Eb', 'F#', 'Ab', 'G#', 'Bb', // sharps and flats
    'Db', 'D#', 'Gb', 'A#', // for those who like to use non-canon names for sharps and flats
    'Cm', 'Cm7', 'CM7', 'Cmaj7', 'CmM7', // minors and 7ths
    'C6','C9', 'C11', 'C13', // few more extension chords
    'Caug', 'Cdim', 'Csus', 'Csus2', 'Csus4',
    'C/E', 'D/F#' // Slash chords
  ]

  console.log(chords.length)
  test.plan(chords.length)

  chords.forEach(chord => {
    const input = '[' + chord + ']'
    if(chordRegex.exec(input) == null || chordRegex.exec(input).length == 0) {
      test.fail('Failed for input: ' + input)
    }
    else {
      const match = chordRegex.exec(input)[1]
      test.equal(match, chord)
    }
  });

});
