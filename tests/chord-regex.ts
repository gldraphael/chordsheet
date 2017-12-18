import { chordRegex } from '../src/chord-regex'
import * as tape from 'tape'

tape('Regex against valid chords', function (test) {
  let chords = [
    'C', 'D', 'E', 'F', 'G', 'A', 'B', // white keys
    'C#', 'Eb', 'F#', 'Ab', 'G#', 'Bb', // sharps and flats
    'Db', 'D#', 'Gb', 'A#', // alt names for sharps and flats
    'Cm', 'Caug', 'Cdim', 'Csus', 'Csus2', 'Csus4', // C triads with diff qualities
    'Cm7', 'CM7', 'C7', 'CmM7', // 7ths
    'Cmin7', 'Cmaj7', 'Cminmaj7', // 7ths with alt names
    'C6', 'C9', 'C11', 'C13', // few more extension chords
    'C/E', 'D/F#' // Slash chords
  ]

  test.plan(chords.length)

  chords.forEach(chord => {
    const input = '[' + chord + ']'
    if (chordRegex.exec(input) === null || chordRegex.exec(input)!.length === 0) {
      test.fail('Failed for input: ' + input)
    } else {
      const match = chordRegex.exec(input)![1]
      test.equal(match, chord, input + ' passed with match ' + match)
    }
  })
})
