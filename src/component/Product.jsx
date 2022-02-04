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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h5>Catagary: {this.props.product["header-top-left-text"]}</h5>
          <button style={{ cursor: "pointer", margin: "10px" }}>
            {this.props.product["product-cta-text"]}
          </button>
        </div>
      </div>
    );
  }
}
export default Product;
