// Load the markdown-it regex plugin
const mdRegex = require('markdown-it-regexp')
// Load our chord-regex
const chordRegex = require('../chord-regex')

// Set our chord's identifier regex pattern and replacement string
const chordPattern = mdRegex(
  // regexp to match
  // Assuming anything within square brackets to be a chord
  chordRegex,

  // this function will be called when something's in square brackets
  function (match, utils) {
    return '<span class="chord"><span class="inner">' + match[1] + '</span></span>'
  }
)

// Import markdown-it and configure it to use our chordpattern
const md = require('markdown-it')({
  html: false, // Enable HTML tags in source
  xhtmlOut: true, // Use '/' to close single tags (<br />).
  // This is only for full CommonMark compatibility.
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer: false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  quotes: '“”‘’'
}).use(chordPattern)

module.exports = {

  // Our exported function
  toHtml: function (chordMarkdownText) {
    if (chordMarkdownText === undefined) {
      throw new Error('Argument chordMarkdownText is required.')
    }
    return md.render(chordMarkdownText)
  }

}
