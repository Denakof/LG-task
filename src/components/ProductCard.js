import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export class ProductCard extends Component {
  render() {
    return (
      <div>
        
        <Card key={this.props.key} className="cards">
          <Card.Img
          className="card-img"
            style={{ width: "15rem", height: "17rem" }}
            variant="top"
            src={this.props.data.image}
          />
          <Card.Body>
            <Card.Text style={{ fontSize: "15px" }}>
              {this.props.data.title}
            </Card.Text>
            <Card.Text >{this.props.data.price} JOD</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductCard;
