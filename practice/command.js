const core = require('@actions/core');
const shell = require('shelljs');

module.exports = async () => {
  try {
    core
      .getInput('command')
      .split('\n')
      .forEach((command) => {
        shell.exec(command);
      });
  } catch (error) {
    core.setFailed(error.message);
  }
};
