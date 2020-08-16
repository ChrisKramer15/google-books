import React from "react";
import BookItem from "./BookItem";

const BookRes = (props) => {
  return (
    <div className="List">
      {props.books.map((book, i) => {
        return (
          <BookItem
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
          />
        );
      })}
    </div>
  );
};

export default BookRes;
