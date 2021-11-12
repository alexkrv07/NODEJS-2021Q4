const { Transform } = require('stream');
const { chooseCipherMethodBy } = require('./choose-cipher');
const { transformLetterByCipher } = require('./transform');


class CipherTransform extends Transform {
  constructor(config) {
    super();
    this.cipherMethod = chooseCipherMethodBy(config);
  }

  _transform(chunk, encoding, callback) {
    try {
      // const arrayOfLetters = chunk.toString('utf8').trim().split('');
      const arrayOfLetters = chunk.toString('utf8').split('');
      const transformArrayOfLetters = arrayOfLetters.map(letter => transformLetterByCipher(letter, this.cipherMethod));
      const resultString = transformArrayOfLetters.join('');
      callback(null, resultString);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = { CipherTransform };

// const counterReader = new CounterReader({ highWaterMark: 2 });
// const counterWriter = new CounterWriter({ highWaterMark: 2 });


// class CounterReader extends Readable {
//   constructor(opt) {
//     super(opt);

//     this._max = 1000;
//     this._index = 0;
//   }

//   _read() {
//     this._index += 1;

//     if (this._index > this._max) {
//       this.push(null);
//     } else {
//       const buf = Buffer.from(`${this._index}`, 'utf8');

//       this.push(buf);
//     }
//   }
// }

// class CounterWriter extends Writable {
//   _write(chunk, encoding, callback) {
//     console.log(chunk.toString());

//     callback();
//   }
// }
