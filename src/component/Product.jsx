import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div
        className="itm-product"
        style={{
          display: "inline-block",
          width: "auto",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          border: "5px solid black"
        }}
      >
        <img src={this.props.product["product-image-url"]} />
        <h3 style={{ fontSize: "10px", margin: "10px" }}>
          {this.props.product["product-name"]}
        </h3>
        <button style={{ cursor: "pointer", margin: "10px" }}>
          {this.props.product["product-cta-text"]}
        </button>
      </div>
    );
  }
}
export default Product;
