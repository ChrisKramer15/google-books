import React from "react";

const BookItem = (props) => {
  return (
    <div className="container">
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.desc}</p>
      <a href={props.link}>View</a>
      <button>Save</button>
    </div>
  );
};

export default BookItem;
