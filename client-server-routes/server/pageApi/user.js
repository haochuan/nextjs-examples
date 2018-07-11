const { getAllUsers } = require('../routes/user');

// this route is for rendering /user page
module.exports = function(app, req, res) {
  getAllUsers()
    .then(response => {
      // store the user info in res.locals
      // then get the data in getInitialProps
      res.locals.users = response;
      app.render(req, res, '/user');
    })
    .catch(e => {
      res.status(500);
    });
};
