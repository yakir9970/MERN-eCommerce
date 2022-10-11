import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import "./ProductScreen.css";
import axios from "axios";

const ProductScreen = (props) => {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.pid}`);
      setProduct(data);
    };
    fetchProduct();
  }, [params]);

  return (
    <React.Fragment>
      <Link
        className="btn btn-light my-3"
        style={{ fontSize: 20, fontWeight: "bold", color: "#2C3E50" }}
        to="/"
      >
        Go Back
      </Link>
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
              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button
                    className="add-to-cart"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
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
