import React from "react";
import Search from "./component/Search";
import ProductGrid from "./component/ProductGrid";
import { Products } from "./Constant";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading:false,
      productsList: [],
      backupList: Products
      //we have to make new app for this and add some advnce functionalyt 
    };
  }
  componentDidMount(){
    this.setState({
      loading:true,
    });
    fetch('https://json.extendsclass.com/bin/7e69e0bc8561').then((respon)=>{
      return respon.json();
    })
    .then((data)=>{
      this.setState ( {
        productsList: data,
        
      });
    })
    .catch((err)=>{
      console.log(err);
    })
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
       {this.setState.loading ?(<h1> lodading ....</h1>):<ProductGrid productsList={this.state.backupList} />}
        
        {/* <ProductGrid style={{ margin: "50px" }} /> */}
        {/* <ProductGrid /> */}
      </div>
    );
  }
}
export default App;
