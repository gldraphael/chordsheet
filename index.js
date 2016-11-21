#! /usr/bin/env node

const processFile = require('./process-file.js');
require('colors');

// Print error message and quit if an error is found
process.on('uncaughtException', function(error) {
  console.error(('Error: ' + error.message).red)
  process.exit(1)
});

// Remove the first two paths
var args = process.argv.slice(2);

if(args.length == 0) {
  console.log('Syntax: chordsheet <input-file> [output-file]'.cyan);
  process.exit(1);
}

// The arguments are input files
args.forEach(function(input) {
  processFile(input)
}, this);