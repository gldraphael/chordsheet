import * as mdRegex from 'markdown-it-regexp'
import { chordRegex } from '../chord-regex'

// Set our chord's identifier regex pattern and replacement string
export const chordPattern = mdRegex(
  // regexp to match
  // Assuming anything within square brackets to be a chord
  chordRegex,

  // this function will be called when something's in square brackets
  (match: RegExpExecArray, utils: any) => {
    return '<span class="chord"><span class="inner">' + match[1] + '</span></span>'
  },
)
