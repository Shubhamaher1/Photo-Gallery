import React from "react";
import Search from "./component/Search";
import ProductGrid from "./component/ProductGrid";
import { Products } from "./Constant";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList: Products,
      backupList: Products
    };
  }
  updateproduct = (products) => {
    this.setState({
      backupList: products
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Myntra</h1>
        <Search
          productsList={this.state.productsList}
          updateproduct={this.updateproduct}
        />
        <ProductGrid productsList={this.state.backupList} />
        {/* <ProductGrid style={{ margin: "50px" }} /> */}
        {/* <ProductGrid /> */}
      </div>
    );
  }
}
export default App;
