/* eslint-disable no-console */
require('./db/db'); // DATABASE CONNECTIONS
const express = require('express');
const path = require('path');
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

// Serve la doc Python
app.use('/docs/apipy', express.static(path.join(__dirname, 'public/site/apipy')));
app.get('/docs/apipy/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/site/apipy/index.html'));
});

// Serve la doc Node
app.use('/docs/apideploy', express.static(path.join(__dirname, 'public/site/apideploy')));
app.get('/docs/apideploy/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/site/apideploy/index.html'));
});

// ROUTES
app.use('/api/comment', restcomment);

// in case of web request
app.get('/', (req, res) => res.send("Luca's Personal Page Web Service"));

app.listen(config.app.port, () =>
  console.log(`Listening on port ${config.app.port}...`)
);
