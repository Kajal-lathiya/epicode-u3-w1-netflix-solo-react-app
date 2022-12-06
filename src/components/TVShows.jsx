import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const TVShows = ({ title }) => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/tv-shows" className="navbar-links">
          <div
            className={
              location.pathname === "/tv-shows" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </div>
        </Link>
        <Link to="/singleMovie" className="navbar-links">
          <div
            className={
              location.pathname === "/singleMovie"
                ? "nav-link active"
                : "nav-link"
            }
          >
            SingleMovie
          </div>
        </Link>
        <Link to="/movieDetails" className="navbar-links">
          <div
            className={
              location.pathname === "/movieDetails"
                ? "nav-link active"
                : "nav-link"
            }
          >
            MovieDetails
          </div>
        </Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default TVShows;
