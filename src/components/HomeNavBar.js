import React,{useState,useEffect} from 'react';
import './HomeNavBar.css';
import './Header/Header.css';
import {Link} from 'react-router-dom';
import {AiOutlineDingding} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { logout } from "../actions/userAction";
import {
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";


function HomeNavBar () {

    const [length,setLen] = useState("");

    const { cart } = useSelector(state => state.cart);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
      
      };

      
    
    useEffect(() => {
      function setLength(){
        var len = 0;

        for(var i=0; i<cart.length;i++){
          if(userInfo?.name == cart[i].userName){
            len = len + 1
          }
        }
        setLen(len)
      }

      setLength();

    }, [userInfo]);
  

    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
          <Link to='/customer-home' className='homenavbar-logo'>
                  VERVE <AiOutlineDingding/>
          </Link>
          </Navbar.Brand>
  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
          <Nav className="m-auto">
            <Form inline>
              
            </Form>
          </Nav>
  
            {userInfo ? (
              <>
                <Nav>
                  <Nav.Link href="/customer-home">
                          Home     
                </Nav.Link>
                <Nav.Link href="/cart">
                  
                                  <FaShoppingCart/> Cart <span className='circle' style={{position: 'absolute', top: '15px'}}>{length}</span>
                  
                </Nav.Link>
  
                  <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={logoutHandler} style={{color:'black'}}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </>
            ) : (
              <Nav>
                {" "}
                <Nav.Link>
                <Link to='/customer-home' className='homenav-links'>
                          Home
                      </Link>
                </Nav.Link>      
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default HomeNavBar;