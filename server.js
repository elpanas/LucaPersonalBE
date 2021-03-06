/* eslint-disable no-console */
require('./db/db'); // DATABASE CONNECTIONS
const express = require('express');
// FRAMEWORK
const app = express();
const compression = require('compression'); // MIDDLEWARES
const helmet = require('helmet');
const cors = require('cors');
const config = require('./config/config'); // CONFIGURATIONS
const restcomment = require('./routes/restcomment'); // ROUTES

// MIDDLEWARE APPLICATIONS
app.use(helmet());
app.use(compression());
app.use(cors(config.corsOpt));
app.use(express.json());

// ROUTES
app.use('/api/comment', restcomment);

// in case of web request
app.get('/', (req, res) => res.send("Luca's Personal Page Web Service"));

app.listen(config.app.port, () =>
  console.log(`Listening on port ${config.app.port}...`)
);
