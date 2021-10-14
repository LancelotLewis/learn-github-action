const core = require('@actions/core');
const exec = require('@actions/exec');

module.exports = async () => {
  try {
    await exec.exec('pwd');
    await exec.exec('cd ../');
    await exec.exec('pwd');
    console.log('\n\n\n-------\n\n\n');
  } catch (error) {
    core.setFailed(error.message);
  }
};
