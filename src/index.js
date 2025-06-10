import { Octokit } from "octokit";

const url = "https://api.github.com/repos/druue/actions-in-action/dispatches";

const octokit = new Octokit();

const resp = octokit.request("POST /repos/{owner}/{repo}/dispatches", {
  owner: "Druue",
  repo: "actions-in-action",
  event_type: "event1",
  client_payload: {
    passed: false,
    message: "Error: timeout",
  },
});

console.log(resp);
