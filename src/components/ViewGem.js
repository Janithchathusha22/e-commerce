import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import '../App.css';

const ViewGem = ({ product, userInfo }) => {
    const cat = product.category;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product, userInfo));
        window.location.reload();
    };

    return (
        <>
            {cat === "Gem" && (
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
                            <Card.Title>Price: LKR {product.price}</Card.Title>
                            <Card.Title>{product.description}</Card.Title>
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

export default ViewGem;