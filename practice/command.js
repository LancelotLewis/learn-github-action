const core = require('@actions/core');
const shell = require('shelljs');

module.exports = async () => {
  try {
    shell.exec('pwd');
    shell.cd('dist');
    shell.exec('pwd');
    shell.exec('ls');
    const file = path.join(process.cwd(), 'index.js');
    console.log('file-path', file);
    // core
    //   .getInput('command')
    //   .split('\n')
    //   .forEach((command) => {
    //     shell.exec(command);
    //     shell.exec('pwd');
    //     shell.exec('ls');
    //     shell.exec('process.cwd()');
    //   });
  } catch (error) {
    core.setFailed(error.message);
  }
};
