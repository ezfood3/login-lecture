"use strict";

// 모듈
const express = require('express');
const path = require('path');
const app = express();

const home = require('./src/routes/home');

// 앱 셋팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', home); 

module.exports = app;

// app.listen(3000, () => {
//   console.log('3000번에서 실행');
// })
