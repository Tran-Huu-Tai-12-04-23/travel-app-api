const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./routes/index.route');
require('dotenv').config();

const app = express();

// middlewares setup
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/node_modules', express.static('node_modules'));
// init routes
app.get('/', (req, res) => {
  res.status(400).send('HUUTAI CI/CD fix issue');
});

app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true,
  }),
);

app.use('/', router);

// init db
const instanceMongodb = require('./dbs/init.mongodb');
const { checkOverload } = require('./helpers/check.connect');
checkOverload();

module.exports = app;
