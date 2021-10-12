const core = require('@actions/core');
const exec = require('@actions/exec');
const shell = require('shelljs');

(async () => {
  try {
    // const endpoint = core.getInput('endpoint');
    // const accessToken = core.getInput('access-token');
    // shell.exec(`blocklet config set registry ${endpoint}`);
    shell.exec('pwd');
    shell.exec('ls');

    await exec.exec('pwd');
    await exec.exec('ls');

    // if (accessToken) {
    //   shell.exec(`blocklet upload --access-token ${accessToken}`);
    // } else {
    //   const developerSk = core.getInput('developer-sk');
    //   shell.exec(`blocklet publish --developer-sk ${developerSk}`);
    // }
  } catch (error) {
    core.setFailed(error.message);
  }
})();
