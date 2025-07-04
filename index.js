import express from "express";
import "dotenv/config";
// require('dotenv').config()

const app = express();

const port = 3000;

const githubData = {
  login: "mdsaddam7860",
  id: 108618761,
  node_id: "U_kgDOBnlkCQ",
  avatar_url: "https://avatars.githubusercontent.com/u/108618761?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/mdsaddam7860",
  html_url: "https://github.com/mdsaddam7860",
  followers_url: "https://api.github.com/users/mdsaddam7860/followers",
  following_url:
    "https://api.github.com/users/mdsaddam7860/following{/other_user}",
  gists_url: "https://api.github.com/users/mdsaddam7860/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/mdsaddam7860/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/mdsaddam7860/subscriptions",
  organizations_url: "https://api.github.com/users/mdsaddam7860/orgs",
  repos_url: "https://api.github.com/users/mdsaddam7860/repos",
  events_url: "https://api.github.com/users/mdsaddam7860/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/mdsaddam7860/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Md Saddam",
  company: null,
  blog: "",
  location: "Patna Bihar",
  email: null,
  hireable: null,
  bio: "I'm a Full Stack Web Developer specializing in design,frontend and backend development.I usually work with React /React Native Tailwind CSS",
  twitter_username: null,
  public_repos: 16,
  public_gists: 1,
  followers: 1,
  following: 9,
  created_at: "2022-07-03T13:35:42Z",
  updated_at: "2025-07-02T16:14:01Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Here</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  //   console.log(`Example app listening on port ${port}`);
  console.log(`Example app listening on port ${process.env.PORT}`);
});
