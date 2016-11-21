#! /usr/bin/env node

// Remove the first two paths
var args = process.argv.slice(2);

// Assume the next path is the input file to be processed
var input = args[0];

require('./process-file.js')(input)