const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const { api } = require("./api.js");

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.json()); // json 등록
app.use(bodyParser.urlencoded({ extended: false })); // URL-encoded 등록
app.use("/", api);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
