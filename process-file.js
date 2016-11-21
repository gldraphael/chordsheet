// Load required plugins
const mdRegex = require('markdown-it-regexp')
const fs = require('fs');

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

var header = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Test</title><link href="style.css" rel="stylesheet" type="text/css"></head><body>';
var footer = '</body></html>';

module.exports = function processFile(input, output) {

  // Ensure the input filename is provided
  if(input === undefined) {
    throw new Error('Input is required'); 
  }

  // The output is missing
  if(output === undefined) {
    // let's append .html to input and use it
    output = input + '.html';
  }
  
  fs.exists(input, function (exists) {
    // If the file exists
    if (exists) {
      fs.stat(input, function (error, stats) {
        fs.open(input, "r", function (error, fd) {
          var buffer = new Buffer(stats.size);

          fs.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer) {
            // Read the input file and close it
            var data = buffer.toString("utf8", 0, buffer.length);
            fs.close(fd);

            // Convert markdown to html and write to file
            var result = md.render(data);
            fs.writeFile(output, header + result + footer, function(err) {
              if(err) {
                throw new Error(err);
              } else {
                // Success!
              }
            }); 
          });
        });
      });
    } else { 
      // The file doesn't exist
      throw new Error(input + ' not found'); 
    }
  }); 
}