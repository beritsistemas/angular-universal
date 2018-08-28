# NgUniversal + Aws Serverless 

Angular Universal running on AWS serverless

It uses serverless framework


## Run
npm install -g serverless
npm i
npm run dev (local dev server, use it when developing)
npm run dev:serverless (local serverless offline server, try it before deploy:dev)

## Deploy
npm run deploy:dev
npm run deploy:prod


## Base on 

https://github.com/enten/angular-universal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.


## About

This starter kit contains all the minimal tooling and configuration you need to kick off your next universal Angular 6 project.

It combines [@angular/cli](https://github.com/angular/angular-cli/tree/v6.0.0) and [udk](https://github.com/enten/udk) to won't have to write specific code for development purposes only.

## Features

* [angular 6](https://github.com/angular/angular/tree/6.0.0) as universal web application platform
* [module-map-ngfactory-loader 6](https://github.com/angular/universal/tree/v6.0.0) as server side rendering of lazy routes
* [angular/cli 6](https://github.com/angular/angular-cli/tree/v6.0.0) as code scaffolder
* [webpack 4](https://github.com/webpack/webpack/tree/v4.6.0) as module bundler
* [node](https://nodejs.org/dist/latest-v8.x/docs/api/) as server
* [express](http://expressjs.com/en/4x/api.html) as request handler
* [udk-builder](https://github.com/enten/udk/blob/master/angular/lib/udk-builder.js) as architect builder
* [ng-udkc](https://github.com/enten/udk#dev-container) as extreme live development container to _**reload all the things!**_
    * [webpack/hot/poll](https://github.com/webpack/webpack/blob/v4.6.0/hot/poll.js) to enable hmr on server side
    * [webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware) (dynamically mounted on server) and [@angularclass/hmr](https://github.com/gdi2290/angular-hmr) to enable hmr on

* [serverless](https://serverless.com) as serverless framework
* [serverless-offline](https://github.com/dherault/serverless-offline) to run serverless locally 

browser side
    * [watchpack](https://github.com/webpack/watchpack) to restart dev container when a metafile changed


## Getting started

```shell
git clone https://github.com/beritsistemas/angular-universal my-project
cd my-project
npm install
npm start
```