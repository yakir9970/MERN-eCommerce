import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import "./ProductScreen.css";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.pid));
  }, [dispatch, params]);

  const addToCartHandler = () => {
    navigate(`/cart/${params.pid}?qty=${qty}`);
  };

  return (
    <React.Fragment>
      <Link
        className="btn btn-light my-3"
        style={{ fontSize: 20, fontWeight: "bold", color: "#2C3E50" }}
        to="/"
      >
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>${product.price}</h2>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col style={{ fontWeight: "bold" }}>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col style={{ fontWeight: "bold" }}>Status:</Col>
                    <Col
                      style={{
                        fontWeight: "bold",
                        color: `${product.countInStock > 0 ? "green" : "red"}`,
                      }}
                      className="col-stock"
                    >
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col style={{ fontWeight: "bold" }}>Quantity:</Col>
                      <Col>
                        <Form.Select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <div className="d-grid gap-2">
                    <Button
                      className="add-to-cart"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
      <Row>
        <Col md={8} className="mt-5">
          <h2 className="h2-desc">Description</h2>
          <ListGroup.Item>
            <h4>{product.description}</h4>
          </ListGroup.Item>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductScreen;
