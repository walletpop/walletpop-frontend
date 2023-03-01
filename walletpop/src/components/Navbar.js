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
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/contact">Signout</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Navbar;
