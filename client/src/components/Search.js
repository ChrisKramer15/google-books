import React from "react";

function Search(props) {
  return (
    <div className="searchArea">
      <form onSubmit={props.requestBooks} action="">
        <input onChange={props.searchClick} type="text"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
