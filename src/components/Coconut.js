import React from 'react';
import ViewCoconut from './ViewCoconut';
import HomeNavBar from './HomeNavBar';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import products from './CoconutData';

export default function Coconut() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <HomeNavBar />
      <Container className="justify-content-center p-2">
        <Row>
          {products.map((product) => (
            <ViewCoconut key={product._id} product={product} userInfo={userInfo} />
          ))}
        </Row>
      </Container>
    </>
  );
}
