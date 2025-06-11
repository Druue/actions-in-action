const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const nameToGreet = core.getInput("who-to-greet");
    console.log(`Hello ${nameToGreet}`);
    const answer = 42;
    core.setOutput("answer", answer);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`Event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}
