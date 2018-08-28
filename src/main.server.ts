// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { createServer } from 'http';
import { join } from 'path';

import { enableProdMode } from '@angular/core';
import { MODULE_MAP } from '@nguniversal/module-map-ngfactory-loader';

import { createApi } from './api';
import { environment } from './environments/environment';

export { AppServerModule } from './app/app.server.module';

export const PORT = process.env.PORT || 4000;
export const BROWSER_DIST_PATH = join(__dirname, '..', 'browser');

export const getNgRenderMiddlewareOptions = () => ({
  bootstrap: exports.AppServerModuleNgFactory,
  providers: [
    // Import module map for lazy loading
    {
      provide: MODULE_MAP,
      useFactory: () => exports.LAZY_MODULE_MAP,
      deps: []
    }
  ]
});

// Faster server renders w/ Prod mode (dev mode never needed)
if(!environment.serverless)
  enableProdMode();//this is not working in serverless, why??

let requestListener = createApi(BROWSER_DIST_PATH, getNgRenderMiddlewareOptions());



if(!environment.serverless){
  console.log("LOCAL DEV SERVER")
// Start up the Node server
const server = createServer((req, res) => {
  requestListener(req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening -- http://localhost:${PORT}`);
});

  // HMR on server side
  if (module.hot) {
    const hmr = () => {
      const { AppServerModuleNgFactory } = require('./app/app.server.module.ngfactory');

      exports.AppServerModuleNgFactory = AppServerModuleNgFactory;

      requestListener = require('./api').createApi(BROWSER_DIST_PATH, getNgRenderMiddlewareOptions());
    };

    module.hot.accept('./api', hmr);
    module.hot.accept('./app/app.server.module.ngfactory', hmr);
  }
  module.exports.server=server; //export server in this case
}else{
  console.log("SERVERLESS SERVER")
  module.exports.api = requestListener;
}


