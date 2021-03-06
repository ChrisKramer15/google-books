const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

const BookData = mongoose.model("Book", bookSchema);

module.exports = BookData;
