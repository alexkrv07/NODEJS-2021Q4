
function atbash(letter, alphabet) {
  const lastIndex = alphabet.length - 1;
  const newCharCode = alphabet[lastIndex].charCodeAt() - letter.charCodeAt() + alphabet[0].charCodeAt();
  return String.fromCharCode(newCharCode);
};

function baseCipher(letter, alphabet, offset) {
  const newCharCode = (letter.charCodeAt() - alphabet[0].charCodeAt() + offset  + alphabet.length)
                    % alphabet.length + alphabet[0].charCodeAt();

  return String.fromCharCode(newCharCode);
};

function caesarEncoding(letter, alphabet) {
  const offset = 1;
  return baseCipher(letter, alphabet, offset)
};

function caesarDecoding(letter, alphabet) {
  const offset = -1;
  return baseCipher(letter, alphabet, offset)
};

function rot8Encoding(letter, alphabet) {
  const offset = 8;
  return baseCipher(letter, alphabet, offset)
};

function rot8Decoding(letter, alphabet) {
  const offset = -8;
  return baseCipher(letter, alphabet, offset)
};

module.exports = { atbash, caesarEncoding, caesarDecoding, rot8Encoding, rot8Decoding };
