const express = require("express");
const show = require("../helpers/showsModel");

const router = express.Router();

router.get("/", (req, res) => {
  show
    .get()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.post("/", (req, res) => {
  show
    .insert(req.body)
    .then(() => {
      res.status(201).json({ message: "Show was created." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.post("/", (req, res) => {
  show
    .insert(req.body)
    .then(() => {
      res.status(201).json({ message: "Show was created." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.put("/:id", (req, res) => {
  show
    .update(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "Show was updated." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.delete("/:id", (req, res) => {
  show
    .remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Show was removed." });
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

router.get("/:id/characters", (req, res) => {
  show
    .getShowsCharacters(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error });
    });
});

module.exports = router;
