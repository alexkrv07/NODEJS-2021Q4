const { UPPERCASE_ALPHAABET, LOWERCASE_ALPHAABET } = require('./constants');

function transformLetterByCipher(letter, cipherMetod) {
  const alphabet = chooseAlphabet(letter);
  if (!alphabet) {
    return letter;
  }
  return cipherMetod(letter, alphabet);
}

function chooseAlphabet(letter) {
  if (UPPERCASE_ALPHAABET.includes(letter)) {
    return UPPERCASE_ALPHAABET;
  } else if (LOWERCASE_ALPHAABET.includes(letter)) {
    return LOWERCASE_ALPHAABET;
  }
  return false;
}

module.exports = { transformLetterByCipher };
