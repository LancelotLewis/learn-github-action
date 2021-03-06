const core = require('@actions/core');
const exec = require('@actions/exec');
const shell = require('shelljs');

module.exports = async () => {
  try {
    const useExec = core.getInput('use-exec') || false;
    // const accessToken = core.getInput('access-token');
    // shell.exec(`blocklet config set registry ${endpoint}`);

    console.log('useExec', useExec);
    if (useExec) {
      await exec.exec('pwd');
      console.log('\n');
      await exec.exec('ls');
      console.log('\n');
      // await exec.exec('test123', ['error'], {
      //   listeners: {
      //     stderr(err) {
      //       console.log('error', err.toString());
      //       throw new Error(err.toString());
      //     },
      //   },
      // });
      // console.log('after error');
    } else {
      shell.exec('pwd');
      console.log('\n');
      shell.exec('ls');
    }

    // if (accessToken) {
    //   shell.exec(`blocklet upload --access-token ${accessToken}`);
    // } else {
    //   const developerSk = core.getInput('developer-sk');
    //   shell.exec(`blocklet publish --developer-sk ${developerSk}`);
    // }
  } catch (error) {
    core.setFailed(error.message);
  }
};
