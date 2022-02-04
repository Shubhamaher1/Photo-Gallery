import React from "react";

class Search extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <input placeholder="Search Here" />
        <button>Search</button>
      </>
    );
  }
}
export default Search;
