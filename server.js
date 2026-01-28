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
app.use('/docs', express.static(path.join(__dirname, 'public/docs')));

app.get('/docs', (req, res) => {
  res.redirect('/docs/');
});

app.get('/docs/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/docs/index.html'));
});

// ROUTES
app.use('/api/comment', restcomment);

// in case of web request
app.get('/', (req, res) => res.send("Luca's Personal Page Web Service"));

app.listen(config.app.port, () =>
  console.log(`Listening on port ${config.app.port}...`)
);
