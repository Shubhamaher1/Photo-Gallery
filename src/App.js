import React from "react";
import Search from "./component/Search";
import ProductGrid from "./component/ProductGrid";

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Myntra</h1>
        <Search />
        <ProductGrid />
        <ProductGrid style={{ margin: "50px" }} />
        <ProductGrid />
      </div>
    );
  }
}
export default App;
