const { ALLOWED_OPTIONS, CONFIG } = require('./constants');
const { AllowedOptionError, ConfigRequiredError, DuplicatedOptionError, NotValidOptionError } = require('./errors');
const { checkValidityConfig } = require('./check-config');


function parseInputLine(args) {
  const result = {};
  const allowedOptions = Object.keys(ALLOWED_OPTIONS);

  for (let i = 0; i < args.length; i += 2) {
    const testOption = args[i];
    const testProperty = args[i + 1];
    checkAllowedOption(testOption);

    for (let j = 0; j < allowedOptions.length; j++) {
      const currentOption = allowedOptions[j];
      if (ALLOWED_OPTIONS[currentOption].includes(testOption)) {
        checkDuplicateOptions(currentOption, result);
        checkProperty(testProperty, currentOption);
        result[currentOption] = testProperty;
      }
    }
  }

  checkConfigIsPassed(result);
  return result;
}

function checkAllowedOption(option) {
  if(!isAllowedOption(option)) {
    throw new AllowedOptionError(option);
  }
}

function isAllowedOption(option) {
  const allowedOptions = Object.values(ALLOWED_OPTIONS).flat();
  if (allowedOptions.includes(option)) {
    return true;
  }
  return false;
}

function checkDuplicateOptions(option, result) {
  const existOptions = Object.keys(result);
  if (existOptions.includes(option)) {
    throw new DuplicatedOptionError(option);
  }
}

function checkProperty(property, option) {
  checkIsPropertyExist(property, option);

  if (option === CONFIG) {
    checkValidityConfig(property)
  }
}

function checkIsPropertyExist(property, option) {
  if (!isProperty(property)) {
    throw new NotValidOptionError(option);
  }
}

function isProperty(property) {
  if (property) {
    return true;
  }
  return false;
}

function checkConfigIsPassed(result) {
  const existOptions = Object.keys(result);
  if (!existOptions.includes(CONFIG)) {
    throw new ConfigRequiredError();
  }
}

// function checkValidityOption(option) {
//   checkAllowedOption(option);
// }

module.exports = { parseInputLine };
