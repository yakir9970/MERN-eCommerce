import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./CheckoutSteps.css";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link className="signin">Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="signin" disabled>
            Sign In
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link className="signin">Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="signin" disabled>
            Shipping
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link className="signin">Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="signin" disabled>
            Payment
          </Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link className="signin">Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className="signin" disabled>
            Place Order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
