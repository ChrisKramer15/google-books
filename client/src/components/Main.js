import React, { Component } from "react";
import Search from "./Search";
import request from "superagent";
import BookRes from "./BookRes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchText: "",
    };
  }

  requestBooks = (event) => {
    event.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchText })
      .then((data) => {
        this.setState({ books: [...data.body.items] });
      });
  };

  searchClick = (event) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    return (
      <div>
        <Search
          requestBooks={this.requestBooks}
          searchClick={this.searchClick}
        />
        <BookRes books={this.state.books} />
      </div>
    );
  }
}

export default Main;
