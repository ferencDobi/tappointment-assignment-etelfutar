const logger = require('log4js').getLogger('controller:auth');

logger.level = process.env.LOG_LEVEL;

const authController = (User) => {
  const login = (request, response) => {
    logger.info(request.session);
    response.json({ id: request.user.id });
  };

  const logout = (request, response) => {
    logger.info(`Logging user ${request.user} out.`);
    request.logout();
    request.session.destroy((error) => {
      if (error) {
        logger.error(error);
      } else {
        response.status(200);
        response.clearCookie('connect.sid', { path: '/' });
        response.json();
      }
    });
    logger.info(`User: ${request.user}`);
  };

  const register = async (request, response) => {
    const { email, password } = request.body;
    try {
      const user = await User.create({ email, password });
      logger.info(`User created with id ${user.id}.`);
      request.login(user, () => {
        logger.info(`User ${user.id} was logged in.`);
        response.status(201);
        response.json({ id: user.id });
      });
    } catch (error) {
      logger.error(error);
      response.status(400);
      response.json({ error: 'E-mail cím foglalt.' });
    }
  };

  return { login, logout, register };
};

module.exports = authController;
