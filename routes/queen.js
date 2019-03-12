const express = require("express");

const { Queens } = require("../models");

const queenRouter = express.Router();

queenRouter.use((req, res, next) => {
  console.log("i'm a queen Router middleware. Holy cow!");
  next();
});

// routes
queenRouter.get("/", async (req, res) => {
  try {
    const queens = await Queens.findAll();
    res.json(queens);
  } catch (e) {
    console.error(e);
  }
});

queenRouter.post("/", async (req, res) => {
  try {
    const queen = await Queens.create({
      name: req.headers.name
    });
    res.json({ queen });
  } catch (e) {
    console.error(e);
  }
});

queenRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const queen = await Queens.findByPk(id);
    res.json(queen);
  } catch (e) {
    console.error(e);
  }
});

queenRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const queen = await Queens.findByPk(id);
    //console.log("QUEEN", queen);
    // console.log("BODY QUEEN: ", req.body);
    const updatedQueen = await queen.update(req.body);
    console.log("UPDATED QUEEN: ", updatedQueen);
    res.json({
      updatedQueen
    });
  } catch (e) {
    console.error(e);
  }
});

queenRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Queens.destroy({
      where: {
        id: id
      }
    });
    res.json({
      message: `Queen with id ${id} was destroyed!`
    });
  } catch (e) {
    console.error(e);
  }
});

module.exports = {
  queenRouter
};
