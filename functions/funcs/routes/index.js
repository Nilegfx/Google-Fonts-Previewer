const { router: rootRouter } = require('./root');
const { router: fontsRouter } = require('./fonts');

exports.setupRoutes = (app) => {
  app.use('/api', rootRouter);
  app.use('/api/fonts', fontsRouter);
};
