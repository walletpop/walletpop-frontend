import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import {signOut} from "../utils/resgisterUser";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cookie = new Cookies();
  const navigate = useNavigate();

  const token = cookie.get('token');

  const [isUserLoggedIn, setIsUsserLoggedIn] = useState(false);

  useEffect(() => {
    if(token){
      setIsUsserLoggedIn(true);
    } else{
      setIsUsserLoggedIn(false);
    }
  }, [token]);

  function signOutUser(){
    signOut();
    navigate("/home");
  }


  return (
    <>
    <Nav>
      <Nav.Item>
      <Nav.Link eventKey="home" as={ Link } to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="register" as={ Link } to="/register">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="signin" as={ Link } to="/signin">Signin</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      {isUserLoggedIn &&
        <Nav.Link eventKey="personal" as={ Link } to="/signout" onClick={signOutUser}>Signout</Nav.Link>
      }
      </Nav.Item>
      <Nav.Item>
      {isUserLoggedIn &&
        <Nav.Link eventKey="personal" as={ Link } to="/personal">Personal</Nav.Link>
      }
      </Nav.Item>
    </Nav>
      <Outlet />
    </>
  )
};

export default Navbar;
