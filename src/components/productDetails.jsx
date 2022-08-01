import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    this.props.history.replace("/products"); //when click save , edit the URL and go to that page, add current address to history
    //if use replace, won't go back to form because current address is replaced(a common behaviour in log in page) 
    // this.props.history.push("/products");
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
