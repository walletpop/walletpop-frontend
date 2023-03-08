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
    console.log(token);
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
      <Nav.Link eventKey="home">
      <Link to="/">Home</Link>
      </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="register">
      <Link to="/register">Register</Link>
      </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="signin">
      <Link to="/signin">Signin</Link>
      </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      {isUserLoggedIn && <Nav.Link eventKey="personal">
        <Link to="/signout" onClick={signOutUser}>Signout</Link>
      </Nav.Link>}
      </Nav.Item>
      <Nav.Item>
      {isUserLoggedIn &&
        <Nav.Link eventKey="personal">
            <Link to="/personal">Personal</Link>
        </Nav.Link>}
      </Nav.Item>
    </Nav>
      <Outlet />
    </>
  )
};

export default Navbar;
