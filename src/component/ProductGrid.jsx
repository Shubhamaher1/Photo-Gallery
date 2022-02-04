import React from "react";
import { Products } from "../Constant";
import Product from "./Product";

class ProductGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList: Products //this mean key and value is same is  equal to products:products
    };
  }
  render() {
    return (
      <>
        <h2>Products List</h2>
        <div
          style={{
            overflowX: "visible",
            msOverflowStyle: "none",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            scrollbarWidth: "none"
          }}
        >
          {this.state.productsList.map((product) => {
            return <Product product={product} />;
          })}
        </div>
      </>
    );
  }
}
export default ProductGrid;
