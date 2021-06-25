require('dotenv').config();
const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    uri: process.env.DB_URI,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: false,
      useUnifiedTopology: true,
    },
  },
  corsOpt: {
    origin: process.env.ORIGIN_URI,
    optionsSuccessStatus: 200,
  },
};

module.exports = config;
