const { router: rootRouter } = require('./root');
const { router: fontsRouter } = require('./fonts');

exports.createRoutes = (app) => {
  app.use('/api', rootRouter);
  app.use('/api/fonts', fontsRouter);
};
