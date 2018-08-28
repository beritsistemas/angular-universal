const serverless = require('serverless-http');
var app=require("./dist/app/server/main").api;

module.exports.handler = serverless(app);