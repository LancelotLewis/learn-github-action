const core = require('@actions/core');
const shell = require('shelljs');

module.exports = async () => {
  try {
    shell.exec('pwd');
    shell.exec('cd dist && pwd');
    shell.exec('pwd');
    console.log('\n\n\n-------\n\n\n');
  } catch (error) {
    core.setFailed(error.message);
  }
};
