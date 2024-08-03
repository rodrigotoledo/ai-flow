const { exec } = require('child_process');
const keyManager = require('../utils/keyManager');
const translate = require('../utils/translate');

exports.command = 'feature start [description]';
exports.desc = 'Start a new feature with a translated description';
exports.builder = (yargs) => {
  return yargs.positional('description', {
    describe: 'Description of the feature in local language',
    type: 'string'
  });
};
exports.handler = async (argv) => {
  if (argv.description) {
    const apiKey = await keyManager.getApiKey();
    const englishDescription = await translate(argv.description, apiKey);

    const gitCommand = `git flow feature start ${englishDescription}`;
    exec(gitCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Execution error: ${error}`);
        return;
      }
      console.log(`Git Flow output: ${stdout}`);
      if (stderr) {
        console.error(`Error output: ${stderr}`);
      }
    });

    console.log(`Starting feature: ${englishDescription}`);
  } else {
    console.log('Please provide a description for the feature.');
  }
};
