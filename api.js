const express = require("express");
const app = express();
const axios = require("axios");

const { stringify } = require("flatted");
const baseUrl = "http://yswnas.synology.me:3000";

app.get("/*", (req, res) => {
  const config = {
    url: baseUrl + req.url,
    params: req.query,
    method: "GET",
  };

  apiCall(config, (response) => {
    res.send(response);
  });
});

app.post("/*", (req, res) => {
  const config = {
    url: baseUrl + req.url,
    method: req.method,
    header: req.headers,
    data: req.body,
  };

  apiCall(config, (response) => {
    res.send(response);
  });
});

async function apiCall(config, callback) {
  await axios({
    ...config,
  }).then((response) => {
    callback(stringify(response.data));
  });
}

module.exports = {
  api: app,
};
