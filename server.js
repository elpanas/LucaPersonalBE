require('dotenv').config();
const express = require('express'), // framework nodejs
  mongoose = require('mongoose'), // framework mongoDB
  helmet = require('helmet'),
  cors = require('cors'),
  restcomment = require('./routes/restcomment'),
  url = process.env.DB_URI, // remote db connection string
  port = process.env.PORT || 3000,
  connOpts = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: false,
  },
  corsOpt = {
    origin: process.env.ORIGIN_URI,
    optionsSuccessStatus: 200,
  };
const app = express();

app.use(helmet());
app.use(cors(corsOpt));
app.use(express.json()); // built-in middleware
//app.use(express.static(__dirname)); // static calls
app.use('/api/comment', restcomment);

// connection to db
mongoose
  .connect(url, connOpts)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

// in case of web request
app.get('/', (req, res) => res.send("Luca's Portfolio Web Service"));

app.listen(port, () => console.log(`Listening on port ${port}...`));
