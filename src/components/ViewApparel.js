import React from 'react';
import {Card} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import '../App.css';
import {Col} from 'react-bootstrap';

const ViewApparel = ({product,userInfo}) => {
    const cat = product.category;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product,userInfo));
        window.location.reload();
    };

    return(
        <>
            {cat === "Apparel & Textile" &&
                <Col md={6} lg={4} sm={12}>
                    <Card className="shadow-lg m-2 rounded card">

                        <Card.Img className='image center' src={product.image}></Card.Img>

                        <Card.Body>
                            <Card.Title>{product.productName}</Card.Title>
                            <Card.Title>Price: LKR {product.price}</Card.Title>
                            <Card.Title>{product.description}</Card.Title>
                            <div className='btnCenter'>
                            <button 
                                type='button' 
                                className='btn btn-warning btn-sm'
                                onClick={handleAddToCart}
                                >
                                    Add to Cart
                            </button>
                            </div>
                        </Card.Body>

                    </Card>
                </Col>
            }
                
        </>                        
    )
}

export default ViewApparel;