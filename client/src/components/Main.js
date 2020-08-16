import React, { Component } from "react";
import Search from "./Search";
import request from "superagent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  requestBooks = (event) => {
    event.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
      });
  };

  searchClick = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    return (
      <div>
        <Search
          requestBooks={this.requestBooks}
          searchClick={this.searchClick}
        />
      </div>
    );
  }
}

export default Main;
