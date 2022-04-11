/* eslint-disable no-console */
const mongoose = require('mongoose');
const config = require('../config/config');

const {
  db: { uri, options },
} = config;

mongoose
  .connect(uri, options)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));
