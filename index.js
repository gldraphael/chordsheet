// Load required plugins
const mdRegex = require('markdown-it-regexp')

var chordPattern = mdRegex(
  // regexp to match 
  // Assuming anything within square brackets to be a chord
  /\[(\w+)\]/,
 
  // this function will be called when something's in square brackets
  function(match, utils) {
    return '<span class="chord"><span class="inner">' + match[1] + '</span></span>';
  }
)

var md = require('markdown-it')({
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     true,         // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       true,         // Convert '\n' in paragraphs into <br>
  linkify:      true,         // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  quotes: '“”‘’'
}).use(chordPattern);

module.exports = function generateHtml(chordMarkdownText) {
  
  if(chordMarkdownText === undefined) {
    throw new Error('Argument chordMarkdownText is required.'); 
  }

  return md.render(data)
}