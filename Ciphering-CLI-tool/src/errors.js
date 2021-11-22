class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.code = 1;
  }
}

class AllowedOptionError extends ValidationError {
  constructor(option) {
    super(`Error! Option ${option} is not allowed.`);
  }
}

class NotValidOptionError extends ValidationError {
  constructor(option) {
    super(`Error! Option: ${option} is not valid or doesn't exist.`);
  }
}

class ConfigRequiredError extends ValidationError {
  constructor() {
    super(`Error! Config is required.`);
  }
}

class DuplicatedOptionError extends ValidationError {
  constructor(option) {
    super(`Error! Option ${option} is duplicated.`);
  }
}

class InputFileError extends ValidationError {
  constructor(file) {
    super(`Error! Input ${file} doesn't exist or can't access it.`);
  }
}

class OutputFileError extends ValidationError {
  constructor(file) {
    super(`Error! Output ${file} doesn't exist or can't access it`);
  }
}

module.exports = { AllowedOptionError, ConfigRequiredError, DuplicatedOptionError, InputFileError, OutputFileError,  ValidationError, NotValidOptionError };
