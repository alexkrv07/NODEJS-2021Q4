const { ALLOWED_FLAG, ALLOWED_CIPHER, SEPARATOR_CONFIG } = require('./constants');
const { NotValidOptionError } = require('./errors');
const MAX_CIPHER_LENGTH = 2;
const ALLOWED_LENGTH_ATBASH = 1;

const allowedCiphers = Object.values(ALLOWED_CIPHER);
const allowedFlags =  Object.values(ALLOWED_FLAG);

function checkValidityConfig(config) {
  const arrayOfCipherMethods = config.split(SEPARATOR_CONFIG);
  arrayOfCipherMethods.forEach(cipherMethod => {
    checkLengthCipherMethod(cipherMethod, config);
    const currentMethod = cipherMethod.split('');
    checkCipherName(currentMethod[0], config);
    checkCipherFlag(currentMethod[1], config);
  });
}

function checkLengthCipherMethod(cipherMethod, config) {
  checkMaxLengthCipherMethod(cipherMethod, config);
  checkAllowedLengthAtbash(cipherMethod, config);
}

function checkMaxLengthCipherMethod(cipherMethod, config) {
  if (cipherMethod.length > MAX_CIPHER_LENGTH) {
    throw new NotValidOptionError(`${config}`);
  }
}

function checkAllowedLengthAtbash(cipherMethod, config) {
  if (cipherMethod[0] === ALLOWED_CIPHER.atbash && cipherMethod.length !== ALLOWED_LENGTH_ATBASH) {
    throw new NotValidOptionError(`${config}`);
  }

  if (cipherMethod.length === ALLOWED_LENGTH_ATBASH && cipherMethod[0] !== ALLOWED_CIPHER.atbash) {
    throw new NotValidOptionError(`${config}`);
  }
}

function checkCipherName(cipher, config) {
  if (!allowedCiphers.includes(cipher)) {
    throw new NotValidOptionError(`${config}`);
  }
}

function checkCipherFlag(flag, config) {

  if (!flag) {
    return;
  }
  if (!allowedFlags.includes(flag)) {
    throw new NotValidOptionError(`${config}`);
  }
}
module.exports = { checkValidityConfig };
