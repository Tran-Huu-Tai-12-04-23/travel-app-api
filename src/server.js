const express = require('express');
require('dotenv').config();
const db = require('../src/config/mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/index.route');
const FuncTest = require('./test.api');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.status(400).send('HUUTAI CI/CD fix issue');
});
app.use('/', router);

// app.use('/api', router);
db.connectToDatabase().then(function () {
   console.log('DB connect successfully!');
   app.listen(PORT, () => {
      console.log(`Distance api `, process.env.LINK_GET_DISTANCE_API);
      console.log(`Server is running on port http://localhost:${PORT}`);
      FuncTest();
   });
});
