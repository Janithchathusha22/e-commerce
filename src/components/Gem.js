import React from 'react';
import ViewGem from './ViewGem'; // Ensure the correct component is imported
import HomeNavBar from './HomeNavBar';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import products from './GemData'; // Importing gem data

export default function Gem() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <HomeNavBar />

      <Container className="justify-content-center p-2">
        <Row>
          {products.map((product) => (
            <ViewGem key={product._id} product={product} userInfo={userInfo} />
          ))}
        </Row>
      </Container>
    </>
  );
}
