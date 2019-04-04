const cors = require('cors')

var corsOptions = {
  origin: 'https://elharony.github.io',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
module.exports.setupCors = (app) => {
  app.use(cors(corsOptions));
}