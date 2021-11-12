const { ALLOWED_CIPHER, ALLOWED_FLAG } = require('./constants');
const { atbash, caesarEncoding, caesarDecoding, rot8Encoding, rot8Decoding } = require('./cipher');

function chooseCipherMethodBy(config) {
  switch (config) {
    case ALLOWED_CIPHER.atbash:
      return  atbash;
    case (ALLOWED_CIPHER.caesar + ALLOWED_FLAG.encoding):
      return  caesarEncoding;
    case (ALLOWED_CIPHER.caesar + ALLOWED_FLAG.decoding):
      return  caesarDecoding;
    case (ALLOWED_CIPHER.rot_8 + ALLOWED_FLAG.encoding):
      return  rot8Encoding;
    case (ALLOWED_CIPHER.rot_8 + ALLOWED_FLAG.decoding):
      return  rot8Decoding;
    default:
      break;
  }
}

module.exports = { chooseCipherMethodBy };
