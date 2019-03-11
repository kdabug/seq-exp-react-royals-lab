const express = require('express');

const { Queens } = require('../models');

const queenRouter = express.Router();

queenRouter.use((req, res, next) => {
  console.log('i\'m a queen Router middleware. Holy cow!');
  next();
})

// routes
queenRouter.get('/', async (req, res) => {
  try {
    const queens = await Queens.findAll()
    res.json(queens);
  }
  catch(e){
    console.error(e);
  }
})

queenRouter.post('/', async (req, res) => {
  try {
    const queen = await Queens.create({
      name: req.headers.name
    })
    res.json({queen})
  } catch(e) {
    console.error(e);
  }
})

module.exports = {
  queenRouter
};
