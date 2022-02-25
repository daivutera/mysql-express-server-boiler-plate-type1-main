const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const checkConnection = require('../../../2022 02 22 sav2 cars/src/models/dbConn');
const postsRouter = require('./routes/v1/postsRoute');
const commentsRouter = require('./routes/v1/commentsRoute');

app.use('/', postsRouter);
app.use('/', commentsRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  checkConnection();
});
