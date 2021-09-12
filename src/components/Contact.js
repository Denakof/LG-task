import React, { Component } from "react";
import { Form, Button,FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Contact extends Component {
  render() {
    return (
      <div className="contactpage">
      <div className="customertext"> CUSTOMER SERVICE</div>
      <div className="formdiv">
        <Form>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />

            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type="text" placeholder="Phone number" />
          </Form.Group>

          <Form.Group>
          <Form.Label>How can we help ?</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          </Form.Group>

          <Button className="submit-button"  variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      </div>
    );
  }
}

export default Contact;
