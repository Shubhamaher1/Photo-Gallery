import React from "react";
//it is for search
//we have to create target here
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputval: ""
    };
  }
  handelChange = (event) => {
    const filterValue = event.target.value;
    const filteredProduct = this.props.productsList.filter((product) => {
      return product["product-name"].includes(filterValue);
    });
    this.props.updateproduct(filteredProduct);
  };
  render() {
    return (
      <>
        <input
          placeholder="Search Here"
          value={this.state.inputval}
          onChange={(event) => {
            // console.log(event);
            // console.log(event.target.value)
            this.setState({
              inputval: event.target.value
            });
            this.handelChange(event);
          }}
        />
        <h1 style={{ color: "red" }}>{this.state.inputval}</h1>
        {/* <button>Search</button> */}
      </>
    );
  }
}
export default Search;
