
const fs = require('fs');
const process = require('process');

const params = process.argv.slice(2);

if (params.length === 0) {
  console.warn('\x1b[33m%s\x1b[0m', 'WARNING : (NO_ARGS) Fileman could not understand your request. Try passing in some arguments');
}

if (params[0] === 'mkdir') {
  if (params.length === 1) {
    console.error('\x1b[31m%s\x1b[0m', 'ERROR : (NO_DIRNAME) Fileman is not yet capable to create folders with no name.');
  } else {
    fs.mkdir(params[1], (err) => {
      if (err) {
        console.error('\x1b[31m%s\x1b[0m', `(DIRECTORY__CREATION_FAILED) ${err}`);
      } else {
        console.log('\x1b[32m%s\x1b[0m', `Directory named '${params[1]}' created.`);
      }
    });
  }
}

if (params[0] === 'rmdir') {
  if (params.length === 1) {
    console.error('\x1b[31m%s\x1b[0m', 'ERROR : (NO_DIRNAME) Fileman is not yet capable to remove folders with no name.');
  } else {
    fs.rmdir(params[1], (err) => {
      if (err) {
        console.error('\x1b[31m%s\x1b[0m', `(DIRECTORY__DELETION_FAILED) ${err}`);
      } else {
        console.log('\x1b[32m%s\x1b[0m', `Directory named '${params[1]}' deleted.`);
      }
    });
  }
}