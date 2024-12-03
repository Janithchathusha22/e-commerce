import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import '../App.css';

const ViewSpices = ({ product, userInfo }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product, userInfo));
    window.location.reload();
  };

  return (
    <>
      <Col md={6} lg={4} sm={12}>
        <Card className="shadow-lg m-4 rounded card">
          <Card.Img
            className="product-image" // Add class for styling consistency
            src={product.image}
            alt={product.productName}
          />
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Title>Price: LKR {product.price}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.quantity} in stock</Card.Text>
            <div className="btnCenter">
              <button
                type="button"
                className="btn btn-warning btn-sm"
                disabled={product.quantity <= 0}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ViewSpices;
