const core = require('@actions/core');
const exec = require('@actions/exec');
const shell = require('shelljs');

(async () => {
  try {
    // const endpoint = core.getInput('endpoint');
    // const accessToken = core.getInput('access-token');
    // shell.exec(`blocklet config set registry ${endpoint}`);
    console.log('shelljs: pwd', shell.exec('pwd').stdout);
    console.log('shelljs: ls', shell.exec('ls').stdout);

    await exec.exec('pwd', {
      listeners: {
        stdout(data) {
          console.log('shelljs: pwd', data.toString());
        },
        stderr(err) {
          console.log('shelljs: pwd error', err.toString());
        },
      },
    });
    await exec.exec('ls', {
      listeners: {
        stdout(data) {
          console.log('shelljs: ls', data.toString());
        },
        stderr(err) {
          console.log('shelljs: ls error', err.toString());
        },
      },
    });

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
