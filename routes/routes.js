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

  // get a single user
  app.get('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userDetails = users.filter((user) => user.id === id);
    if (userDetails.length) {
      return res.status(200).send({
        success: 'true',
        message: 'user retrieved successfully',
        userDetails,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: 'user does not exist',
    });
  });
};

module.exports = appRouter;
