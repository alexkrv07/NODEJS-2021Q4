const fs = require('fs');
const path = require('path');
const process = require('process');
const { OutputFileError } = require('./errors');

function createOutputStream(setting) {
  let outputStream;
  if (setting.output) {
    const pathToOutputFile = path.resolve(setting.output);
    if (!fs.existsSync((pathToOutputFile))) {
      throw new OutputFileError(`${setting.output}`);
    }
    outputStream = fs.createWriteStream(pathToOutputFile, {flags:'a'});
  } else {
    outputStream = process.stdout;
  }
  return outputStream;
}

module.exports = { createOutputStream };
