const users = require('../db/users.json');

const appRouter = function appRouter(app) {
  /* anytime there is a get request to the root of our
  application the server should print a welcome
  statement */
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to our restfull API');
  });

  // get all users
  app.get('/api/v1/users', (req, res) => {
    res.status(200).send({
      success: ' true',
      message: 'users retrieved successfully',
      users,
    });
  });
};

module.exports = appRouter;
