const process = require('process');
const { ValidationError } = require('./src/errors');
const { parseInputLine } = require('./src/options');
const { createInputputStream } = require('./src/input-stream');
const { createOutputStream } = require('./src/output-stream');
const { CipherTransform } = require('./src/transform-caesar');
const { SEPARATOR_CONFIG } = require('./src/constants');

  try {
    const args = process.argv.slice(2);
    const setting = parseInputLine(args);
    let inputStream = createInputputStream(setting);
    const outputStream = createOutputStream(setting);
    const config = setting.config.split(SEPARATOR_CONFIG);

    let mainstrean;
    for (let i = 0; i < config.length; i++) {
      if (i === 0) {
        mainstrean = inputStream.pipe(new CipherTransform(config[i]));
      } else {
        mainstrean = mainstrean.pipe(new CipherTransform(config[i]));
      }
    }

    mainstrean.pipe(outputStream);
    process.on('exit', () => process.stdout.write('Thank you. Application is close. Good luck!'));
    process.on('SIGINT', () => {
      process.exit();
    });

  } catch (err) {
    if (err instanceof ValidationError) {
      console.error(err.message);
      process.exit(err.code);
    } else {
      throw err;
    }
  }
