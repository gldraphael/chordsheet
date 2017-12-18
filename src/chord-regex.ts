const chordNames = `[A-G]`
const qualityExtensionsEtc = `(#|b|m|M|2|3|4|5|6|7|9|11|13|\\(|\\)|add|sub|dim|aug|maj|min|sus2|sus4?)*`
const slashChordPattern = `(\\\/${chordNames}#?b?)?`

const chordRegexString = `${chordNames}${qualityExtensionsEtc}${slashChordPattern}`
export const chordRegex = RegExp(`\\[(${chordRegexString})\\]`)
