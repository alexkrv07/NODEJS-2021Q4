const { parseInputLine } = require('../src/options');
const { AllowedOptionError, ConfigRequiredError, DuplicatedOptionError, InputFileError, OutputFileError,  ValidationError, NotValidOptionError } = require('../src/errors');


test('Test duplicate config', () => {
  const config = '-c C1-C1-A-R0 -c C1';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option config is duplicated.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test duplicate input', () => {
  const config = '-c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i "./input.txt" -o "./output.txt" -i';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option input is duplicated.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test duplicate output', () => {
  const config = '-c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i "./input.txt" -o "./output.txt" -o';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option output is duplicated.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test config is required', () => {
  const config = '-i "./input.txt" -o "./output.txt"';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Config is required.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test allowed options', () => {
  const config = '-c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i "./input.txt" -b "./output.txt"';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option -b is not allowed.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test config is valid', () => {
  const config = '-c C1-R1-C0-C0-A-R2-R1-R1-A-C1 -i "./input.txt" -o "./output.txt"';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option: C1-R1-C0-C0-A-R2-R1-R1-A-C1 is not valid or doesn\'t exist.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test config is valid', () => {
  const config = '-c C1-B1-C0-C0-A-R1-R1-R1-A-C1 -i "./input.txt" -o "./output.txt"';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option: C1-B1-C0-C0-A-R1-R1-R1-A-C1 is not valid or doesn\'t exist.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test input property is passed', () => {
  const config = '-c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i  -o "./output.txt"';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option: input is not valid or doesn\'t exist.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test output property is passed', () => {
  const config = '-c C1-R1-C0-C0-A-R0-R1-R1-A-C1 -i "./input.txt" -o ';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option: output is not valid or doesn\'t exist.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test cipher-method maxlength is valid', () => {
  const config = '-c C1-R12-C0-C0-A-R0-R1-R1-A-C1 -i "./input.txt" -o ';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option: C1-R12-C0-C0-A-R0-R1-R1-A-C1 is not valid or doesn\'t exist.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test cipher-method-atbash  is valid', () => {
  const config = '-c C1-R1-C0-C0-A-R0-R1-R1-A0-C1 -i "./input.txt" -o ';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option: C1-R1-C0-C0-A-R0-R1-R1-A0-C1 is not valid or doesn\'t exist.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});

test('Test cipher-method minlength  is valid', () => {
  const config = '-c C1-R1-C-C0-A-R0-R1-R1-A-C1 -i "./input.txt" -o ';
  const parseConfig = config.split(' ');
  const errorMessage = 'Error! Option: C1-R1-C-C0-A-R0-R1-R1-A-C1 is not valid or doesn\'t exist.';
  expect(() => parseInputLine(parseConfig)).toThrow(errorMessage);
});
