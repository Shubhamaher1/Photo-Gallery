import React from "react";
import Search from "./component/Search";
import ProductGrid from "./component/ProductGrid";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Myntra</h1>
        <Search />
        <ProductGrid />
      </>
    );
  }
}
export default App;
