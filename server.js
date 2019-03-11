const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan');

const { kingRouter } = require('./routes/king');
const { queenRouter } = require('./routes/queen');

const { Kings, Queens } = require('./models')

const PORT = 9000;

const app = express();

app.use(logger('dev'))
app.use(cors());
app.use(bodyParser.json());
app.use('/kings', kingRouter);
app.use('/queens', queenRouter);

app.get('/', (req, res) => {
  res.send(`Welcome to our Kings and Queens App! It's cool!`)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
