const BookData = require("../models/book");

// Defining methods for the booksController
module.exports = {
  findAll(req, res) {
    BookData.find(req.query)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => res.status(422).json(err));
  },
  create(req, res) {
    const newBook = new BookData(req.body);

    newBook.save().then(() => res.json("Book added!"));
  },
};
