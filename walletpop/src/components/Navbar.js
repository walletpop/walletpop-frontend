import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
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
      <Nav.Link eventKey="personal">
        <Link to="/signout">Signout</Link>
      </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="personal">
            <Link to="/personal">Personal</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
      <Outlet />
    </>
  )
};

export default Navbar;
