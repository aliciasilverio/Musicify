import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NewAccount from '../views/userFolder/new';
import Artists from '../middleSection/artists';
import Songs from '../middleSection/songs';
import '../App.css';

    

const NavBarComponent = () => {
    return(
        <div className="navbar-component">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Musicify</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Nav.Link href="#action1">Artists</Nav.Link>
            <Nav.Link href="#action2">Songs</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
                Something else here
            </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
};

export default NavBarComponent;