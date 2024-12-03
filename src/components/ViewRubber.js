import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import '../App.css';

const ViewRubber = ({ product, userInfo }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product, userInfo));
        // Provide user feedback instead of reloading the page
        alert(`${product.productName} has been added to the cart!`);
    };

    return (
        <>
            {/* Ensure the product has a category and it matches "Rubber" */}
            {product.category === "Rubber" && (
                <Col md={6} lg={4} sm={12}>
                    <Card className="shadow-lg m-2 rounded card">
                        <div className="image-container">
                            <Card.Img
                                className="product-image"
                                src={product.image}
                                alt={product.productName}
                            />
                        </div>
                        <Card.Body>
                            <Card.Title>{product.productName}</Card.Title>
                            <Card.Text>Price: LKR {product.price}</Card.Text>
                            <Card.Text>{product.description}</Card.Text>
                            <div className="btnCenter">
                                <button
                                    type="button"
                                    className="btn btn-warning btn-sm"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </>
    );
};

export default ViewRubber;
