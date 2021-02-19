/*
const router = require("express").Router();
const db = require("../../models");
const axios = require("axios");

router.get("/books", (req, res) => {
  db.Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
});

router.post("/books", (req, res) => {
    db.Book.create(req.body)
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
})

router.delete("/books/:id", (req, res) => {
    db.Book.deleteOne({_id : req.params.id})
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
})

router.get("/google", (req, res) => {
    let search = req.body;
    let query = "https://www.googleapis.com/books/v1/volumes?q=title:" + search;
    axios.get(query).then(books => res.json(books))
    .catch(err => res.status(422).end());
})

module.exports = router;

*/