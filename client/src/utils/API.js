import axios from "axios";

export default {
  getBooks: function (searchTerm) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm
    );
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  //get books saved by user in local database
  getSavedBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};
