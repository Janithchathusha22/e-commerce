import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row ,Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loading from '../../components/Loading/Loading';
import MainScreen from '../../components/MainScreen'
import "./Register.css";
import { register } from '../../actions/userAction';

const RegisterScreen = () => {
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
   //if user enter wrong pw
   const [message, setMessage] = useState(null);
  
const dispatch = useDispatch();

const userRegister = useSelector((state) => state.userRegister);
const { loading, error, userInfo } = userRegister;

const navigate = useNavigate();

//redirect to order page
useEffect(() => {
  if (userInfo) {
    navigate("/register");
  }
}, [navigate,userInfo]);

const submitHandler = async (e) => {
  e.preventDefault();
  //if pw are not equal throw an error
  if (password !== confirmpassword) {
    setMessage("password do not match");
  } else {
    dispatch(register(name, password, email, phone));
    alert("Successfully registered!")
    window.location.reload();
  }
};

 return (
   <>

    <MainScreen tittle="Let's Get Started!">
     <div className="top"  >


       <Card style={{ paddingtop: 0 }}>
         <div className="loginContainer">
           {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
           {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
           {loading && <Loading />}
           <Col md={6}>
             <Form onSubmit={submitHandler}>
               <Form.Group controlId="name">
                 <Form.Label>Name</Form.Label>
                 <Form.Control
                   className="line"
                   type="name"
                   value={name}
                   placeholder="Enter name"
                   onChange={(e) => setName(e.target.value)}
                   required
                 />
               </Form.Group>

               <Form.Group controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control
                   className="line"
                   type="email"
                   value={email}
                   placeholder="Enter email"
                   onChange={(e) => setEmail(e.target.value)}
                   required
                 />
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control
                   className="line"
                   type="password"
                   value={password}
                   placeholder="Password"
                   onChange={(e) => setPassword(e.target.value)}
                   required
                 />
               </Form.Group>

               <Form.Group controlId="confirmPassword">
                 <Form.Label>Confirm Password</Form.Label>
                 <Form.Control
                   className="line"
                   type="password"
                   value={confirmpassword}
                   placeholder="Confirm Password"
                   onChange={(e) => setConfirmPassword(e.target.value)}
                   required
                 />
               </Form.Group>

               <Form.Group controlId="formBasicPhone">
                 <Form.Label>Phone No</Form.Label>
                 <Form.Control
                   className="line"
                   type="text"
                   value={phone}
                   placeholder="Enter Phone No"
                   pattern='[0]{1}[0-9]{9}'
                   onChange={(e) => setPhone(e.target.value)}
                   required
                 />
               </Form.Group>
               <br />
               <Button variant="primary" type="submit">
                 Register
               </Button>
             </Form>
             <Row className="py-3">
               <Col>
                 Have an Account ? <Link to="/login">Login</Link>
               </Col>
             </Row>
           </Col>
         </div>
       </Card>
     </div>
   </MainScreen>

   </>
 );
}

export default RegisterScreen;
