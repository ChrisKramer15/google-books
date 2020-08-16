import React from "react";

function Search(props) {
  return (
    <form onSubmit={props.requestBooks} action="">
      <input onChange={props.searchClick} type="text"></input>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
