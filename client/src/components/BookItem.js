import React from "react";

function BookItem(props, { handleSaveClick }) {
  return (
    <div className="container">
      <div>
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.desc}</p>
        <a href={props.link}>View</a>
      </div>
    </div>
  );
}
export default BookItem;
