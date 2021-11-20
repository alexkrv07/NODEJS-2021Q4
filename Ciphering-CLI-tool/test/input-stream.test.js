const { createInputputStream } = require('../src/input-stream');
const path = require('path');


test('Test input incorrect file name', () => {
  const input = path.resolve(__dirname, 'input.txt');
  // const parseConfig = config.split(' ');
  const errorMessage = 'Error! Inputinput.txt doesn\'t exist or can\'t access it';
  expect(() => createInputputStream(input).toThrow(errorMessage));
});
