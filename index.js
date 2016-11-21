#! /usr/bin/env node

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
} else if(args.length > 2) {
  console.error('Too many arguments found'.red);
  console.log('Syntax: chordsheet <input-file> [output-file]'.cyan);
  process.exit(1);
}

// Assume the next path is the input file to be processed
var input = args[0];

require('./process-file.js')(input)