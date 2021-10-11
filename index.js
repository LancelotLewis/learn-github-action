const core = require('@actions/core');
const shell = require('shelljs');

try {
  const endpoint = core.getInput('endpoint');
  const accessToken = core.getInput('access-token');
  // shell.exec(`blocklet config set registry ${endpoint}`);
  shell.exec(`echo ${endpoint}`);

  if (accessToken) {
    // shell.exec(`blocklet upload --access-token ${accessToken}`);
    shell.exec(`echo ${accessToken}`);
  } else {
    const developerSk = core.getInput('developer-sk');
    // shell.exec(`blocklet publish --developer-sk ${developerSk}`);
    shell.exec(`echo ${developerSk}`);
  }
} catch (error) {
  core.setFailed(error.message);
}
