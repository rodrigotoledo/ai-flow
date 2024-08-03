const keyManager = require('../utils/keyManager');

exports.command = 'SET_KEY [key]';
exports.desc = 'Set the API key for OpenAI';
exports.builder = (yargs) => {
  return yargs.positional('key', {
    describe: 'API key for OpenAI',
    type: 'string'
  });
};
exports.handler = (argv) => {
  if (argv.key) {
    keyManager.setApiKey(argv.key);
    console.log('API Key has been set.');
  } else {
    console.error("Please provide an API key.");
  }
};
