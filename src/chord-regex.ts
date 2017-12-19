const chordNames = `[A-G][#|b]?`
const qualities = `min|m|dim|aug|sus[249]?`

const degrees = `(#|b|M|maj)?(2|3|4|5|6|7|9|11|13)`
const extensions = `[\\(]?[add|sub]?${degrees}[\\)]?`
const slashChordPattern = `\\/${chordNames}`

const chordRegexString = `(${chordNames})(${qualities})?(${extensions})*(${slashChordPattern})?`
export const chordRegex = RegExp(`\\[(${chordRegexString})\\]`)
