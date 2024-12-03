import React, { useState, useEffect } from 'react';
import ViewSpices from './ViewSpices';
import HomeNavBar from './HomeNavBar';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import spicesData from './SpicesData'; // Import the spices data

export default function Spices() {
  const [products] = useState(spicesData); // Use the SpicesData.js file for static data

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <HomeNavBar />

      <Container className="justify-content-center p-2">
        <Row>
          {products.map((product) => (
            <ViewSpices key={product._id} product={product} userInfo={userInfo} />
          ))}
        </Row>
      </Container>
    </>
  );
}
