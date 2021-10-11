const core = require('@actions/core');
const shell = require('shelljs');

try {
  const endpoint = core.getInput('endpoint');
  const accessToken = core.getInput('access-token');
  shell.exec(`blocklet config set registry ${endpoint}`);

  if (accessToken) {
    shell.exec(`blocklet upload --access-token ${accessToken}`);
  } else {
    const developerSk = core.getInput('developer-sk');
    shell.exec(`blocklet publish --developer-sk ${developerSk}`);
  }
} catch (error) {
  core.setFailed(error.message);
}
