require('dotenv').config();
const express = require('express'), // framework nodejs
  mongoose = require('mongoose'), // framework mongoDB
  helmet = require('helmet'),
  cors = require('cors'),
  restcomment = require('./routes/restcomment'),
  url = process.env.DB_URI, // remote db connection string
  connOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  corsOpt = {
    origin: 'https://lucapanariello.altervista.org',
    optionsSuccessStatus: 200,
  };
const app = express();

app.use(helmet());
app.use(cors(corsOpt));
app.use(express.json()); // built-in middleware

// connection to db
mongoose
  .connect(url, connOpts)
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

// in case of web request
app.get('/', (req, res) => {
  res.send("Luca' Portfolio Web Service");
});

// every request calls a different script based on its path
//app.use(express.static(__dirname)); // static calls
app.use('/api/comment', restcomment);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
