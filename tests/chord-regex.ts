import * as tape from 'tape'
import { chordRegex } from '../src/chord-regex'

tape('Regex against valid chords', (test) => {
  const chords = [
    'C', 'D', 'E', 'F', 'G', 'A', 'B', // white keys
    'C#', 'Eb', 'F#', 'Ab', 'G#', 'Bb', // sharps and flats
    'Db', 'D#', 'Gb', 'A#', // alt names for sharps and flats
    'Cm', 'Caug', 'C+', 'Cdim', 'Co', // different qualities
    'Csus', 'Csus2', 'Csus4', // suspended chords
    'Cm7', 'CM7', 'C7', 'CmM7', // 7ths
    'Cmin7', 'Cmaj7', 'Cminmaj7', // 7ths with alt names
    'C6', 'C9', 'C11', 'C13', // few more extension chords
    'C/E', 'D/F#', // Slash chords
    'C#m(#11b5)', 'C#mb5', // few real extension chords
  ]

  test.plan(chords.length)

  chords.forEach((chord) => {
    test.true(isMatch(chord), chord)
  })
})

tape('Regex against invalid chords', (test) => {
  let invalidChords = [
    'CMm7', // major minors are dominant 7ths
    'Cmaj', 'CM', // Just use C
    'Caugaug', 'Cmdim', 'Cmm',
    'C##', 'Ebb', // Double sharps and double flats not support as of now
  ]
  invalidChords = invalidChords.concat('HIJKLMNOPQRSTUVWXYZ'.split('')) // Invalid chordnames

  test.plan(invalidChords.length)

  invalidChords.forEach((chord) => {
    test.false(isMatch(chord), chord)
  })
})

/** Helper functions */

/**
 * Checks if the chord was a match against the regexp
 *
 * @param {string} chord The chord to check against
 * @returns {boolean} True if the chord was recognized by the regexp
 */
function isMatch(chord: string): boolean {
  return chordRegex.test(`[${chord}]`)
}
