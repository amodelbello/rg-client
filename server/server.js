/* eslint-disable no-console */
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/detail/:id', (req, res) => {
      const actualPage = '/detail';
      const queryParams = { id: req.params.id };
      console.log('actualPage', actualPage);
      console.log('queryParams', queryParams);
      return handle(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3001, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3001');
    });
  })
  .catch(e => {
    console.log(e.stack);
    process.exit(1);
  });
