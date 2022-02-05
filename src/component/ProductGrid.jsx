import React from "react";
import { Products } from "../Constant";
import Product from "./Product";

class ProductGrid extends React.Component {
  constructor() {
    super();
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
          {this.props.productsList.map((product) => {
            return <Product product={product} />;
          })}
        </div>
      </>
    );
  }
}
export default ProductGrid;
