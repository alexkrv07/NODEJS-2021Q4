const ALLOWED_OPTIONS = {
  config: [
      '-c',
      '--config',
    ],
  input: [
     '-i',
     '--input' ,
    ],
  output: [
    '-o',
      '--output',
    ],
}

const ALLOWED_FLAG = {
  encoding: '1',
  decoding: '0',
}

const ALLOWED_CIPHER = {
  caesar: 'C',
  rot_8: 'R',
  atbash: 'A',
}

const SEPARATOR_CONFIG = '-';
const CONFIG = 'config';

const UPPERCASE_ALPHAABET =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const LOWERCASE_ALPHAABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

module.exports = { ALLOWED_OPTIONS, ALLOWED_FLAG, ALLOWED_CIPHER, SEPARATOR_CONFIG, CONFIG, UPPERCASE_ALPHAABET, LOWERCASE_ALPHAABET };
