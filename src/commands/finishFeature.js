const { exec } = require('child_process');

exports.command = 'feature finish';
exports.desc = 'Finish the current feature in Git Flow';
exports.handler = () => {
    const gitCommand = 'git flow feature finish';
    exec(gitCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Execution error: ${error}`);
        return;
      }
      console.log(`Git Flow output: ${stdout}`);
      if (stderr) {
        console.error(`Error output: ${stderr}`);
      } else {
        console.log('Feature finished successfully.');
      }
    });
};
