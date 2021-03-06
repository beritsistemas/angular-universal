import { ngExpressEngine, NgSetupOptions } from '@nguniversal/express-engine';

import * as express from 'express';

export function createApi(distPath: string, ngSetupOptions: NgSetupOptions) {
  const api = express();

  api.set('view engine', 'html');
  api.set('views', distPath);

  // Angular Express Engine
  api.engine('html', ngExpressEngine(ngSetupOptions));



  api.get('/api/test', (req, res) => {
    res.json({title:"Api Response"})
  })

  // Server static files from distPath
  api.get('*.*', express.static(distPath));

  // All regular routes use the Universal engine
  api.get('*', (req, res) => res.render('index', { req }));

  return api;
}
