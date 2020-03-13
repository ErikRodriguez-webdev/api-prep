const express = require("express");
const character = require("../helpers/charactersModel");

const router = express.Router();

router.get("/", (req, res) => {
  character
    .get()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.post("/", (req, res) => {
  character
    .insert(req.body)
    .then(() => {
      res.status(201).json({ message: "Character was created." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.put("/:id", (req, res) => {
  character
    .update(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "Character was updated." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.delete("/:id", (req, res) => {
  character
    .remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Character was deleted." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

module.exports = router;
