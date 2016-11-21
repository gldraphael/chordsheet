#! /usr/bin/env node

// Remove the first two paths
var args = process.argv.slice(2);

// Assume the next path is the input file to be processed
var input = args[0];

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

var fileName = input;
var header = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Test</title><link href="style.css" rel="stylesheet" type="text/css"></head><body>';
var footer = '</body></html>';

fs.exists(fileName, function (exists) {
  if (exists) { // If the file exists
    fs.stat(fileName, function (error, stats) {
      fs.open(fileName, "r", function (error, fd) {
        var buffer = new Buffer(stats.size);

        fs.read(fd, buffer, 0, buffer.length, null, function (error, bytesRead, buffer) {
          // Read the input file and close it
          var data = buffer.toString("utf8", 0, buffer.length);
          fs.close(fd);

          // Convert markdown to html and write to file
          var result = md.render(data);
          fs.writeFile(fileName+'.html', header + result + footer, function(err) {
            if(err) {
              return console.log(err);
            } else {
              console.log("The file was saved!");
            }
          }); 
        });
      });
    });
  } else { // The file doesn't exist
    console.error('The file ' + fileName + ' doesnt exist');
  }
});