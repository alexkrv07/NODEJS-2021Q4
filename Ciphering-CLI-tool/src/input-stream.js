const fs = require('fs');
const path = require('path');
const process = require('process');
const { InputFileError } = require('./errors');

function createInputputStream(setting) {
  let inputStream;
  if (setting.input) {
    const pathToInputFile =  path.resolve(setting.input);

    if (!fs.existsSync((pathToInputFile))) {
      throw new InputFileError(`${setting.input}`);
    }

    inputStream = fs.createReadStream(
      pathToInputFile,
      'utf8'
    );
  } else {
    inputStream = process.stdin;
  }
  return inputStream;
}

module.exports = { createInputputStream };
