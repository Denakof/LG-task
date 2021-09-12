import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button,Card } from "react-bootstrap";
import axios from "axios";
import ProductCard from "./ProductCard";
export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allProducts: null,
    };
  }

  getProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      this.setState({
        allProducts: response.data.map((element, idx) => {
          return <ProductCard data={element} key={idx} />;
        }),
      });
    });
  };
  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
<div>
  <div className="customertext"> Products</div>
    <div className="product-div">
      
      {this.state.allProducts}</div>;
      </div>
    )
  }
}

export default Products;
