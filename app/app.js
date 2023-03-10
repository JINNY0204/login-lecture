"use strict";

//모듈
const express = require('express');
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views"); //view를 views라는 폴더로 지정 
app.set("view engine", "ejs"); //view engine을 ejs로 지정

//use : 미들웨어를 등록하는 메서드
app.use("/", home);

module.exports = app;