import React from "react";

const BookItem = (props) => {
  return (
    <div className="container">
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
    </div>
  );
};

export default BookItem;
