import React from 'react';
import ViewRubber from './ViewRubber'; // Ensure this component exists and works properly
import HomeNavBar from './HomeNavBar'; // Ensure HomeNavBar component exists
import { Row, Container } from 'react-bootstrap'; // Correct usage of Bootstrap components
import { useSelector } from 'react-redux'; // For accessing Redux state
import products from './RubberData'; // Ensure RubberData.js exists and exports products array

const Rubber = () => {
    const userLogin = useSelector((state) => state.userLogin); // Ensure Redux state has userLogin slice
    const { userInfo } = userLogin || {}; // Add a fallback to prevent undefined errors

    return (
        <>
            <HomeNavBar />

            <Container className="justify-content-center p-2">
                <Row>
                    {products.map((product) => (
                        <ViewRubber key={product._id} product={product} userInfo={userInfo} />
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Rubber;
