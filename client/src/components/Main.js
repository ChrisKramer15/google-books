import React, { Component } from "react";
import Search from "./Search";
import request from "superagent";
import BookRes from "./BookRes";
// import API from "../utils/API";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchText: "",
    };
  }

  //a good react lifestyle add in could be to have a componentDidMount function here.  This would enable a possible search or dropdown list that could be used for recent books searched or favorite categories.

  //function that calls external api.  Chose to go with superagent instead of axios
  requestBooks = (event) => {
    event.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchText })
      .then((data) => {
        console.log(data);
        this.setState({ books: [...data.body.items] });
      });
  };

  //function for the search button event listener
  searchClick = (event) => {
    this.setState({ searchText: event.target.value });
  };

  handleSaveClick = (e) => {
    e.preventDefault();
    const book = {
      title: this.state.title,
    };
    console.log("Successfully added to book list!");
    console.log(book);
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
