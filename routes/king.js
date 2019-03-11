const express = require('express');

const { Kings } = require('../models');

const kingRouter = express.Router();

kingRouter.use((req, res, next) => {
  console.log('i\'m a king Router middleware. Holy cow!');
  next();
})

// routes
kingRouter.get('/', async (req, res) => {
  try {
    const kings = await Kings.findAll()
    res.json(kings);
  }
  catch(e){
    console.error(e);
  }
})

kingRouter.post('/', async (req, res) => {
  try {
    const king = await Kings.create({
      name: req.headers.name
    })
    res.json({king})
  } catch(e) {
    console.error(e);
  }
})

kingRouter.get('/:id', async(req, res) => {
  try {
    const id = req.params.id
    const king = await Kings.findByPk(id);
    res.json(king)
  } catch(e){
    console.error(e)
  }
})

kingRouter.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const king = Kings.findByPk(id)
    await king.update(req.headers.name)
    res.json({
      king
    })
  } catch(e) {
    console.error(e)
  }
})

kingRouter.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await Kings.destroy({
      where: {
        id: id
      }
    })
    res.json({
      message: `King with id ${id} was destroyed!`
    })
  } catch (e) {
    console.error(e);
  }
})



module.exports = {
  kingRouter
};
