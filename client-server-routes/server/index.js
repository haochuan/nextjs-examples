const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const userRouter = require('./routes/user').router;
const userPageRoute = require('./pageApi/user');

app
  .prepare()
  .then(() => {
    const server = express();

    // apply routers
    server.use('/api', userRouter);

    server.get('/user', (req, res) => {
      userPageRoute(app, req, res);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
