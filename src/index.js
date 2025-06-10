import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

// ? https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#create-a-repository-dispatch-event
const res = await octokit.request("POST /repos/{owner}/{repo}/dispatches", {
  owner: "Druue",
  repo: "actions-in-action",
  event_type: "event1",
  client_payload: {
    passed: "false",
    message: "Error: timeout",
  },
});

// ? https://docs.github.com/en/rest/actions/workflows?apiVersion=2022-11-28#create-a-workflow-dispatch-event
// const resp_one = await octokit.request(
//   "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
//   {
//     owner: "Druue",
//     repo: "actions-in-action",
//     workflow_id: "dispatch.yml",
//     ref: "main",
//     inputs: {
//       logLevel: "warning",
//       tag: true,
//     },
//     headers: {
//       "X-Github-Api-Version": "2022-11-28",
//     },
//   }
// );

console.log(res);
