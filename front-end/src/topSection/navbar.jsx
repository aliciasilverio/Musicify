// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

// import '../App.css';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import Artists from '../videoResults/artists';
// import Songs from '../videoResults/songs';
// import Login from '../signIn/login';
// import Profile from '../profile';
// // import Home from "../home";

    

// const NavBarComponent = () => {
//     return(
//             <Router>
//         <div className="navbar-component">
//             <Navbar bg="light" expand="lg">
//                 <Container fluid>
//                     <Navbar.Brand href="#">Musicify</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="navbarScroll" />
//                     <Navbar.Collapse id="navbarScroll">
//             <Nav
//                 className="me-auto my-2 my-lg-0"
//                 style={{ maxHeight: '100px' }}
//                 navbarScroll
//             >
//             {/* <Nav.Link as={Link} to={"/home"}>Home</Nav.Link> */}
//             <Nav.Link as={Link} to={"/artists"}>Artists</Nav.Link>
//             <Nav.Link as={Link} to={"/songs"}>Songs</Nav.Link>
//             <NavDropdown title="Profile" id="navbarScrollingDropdown">
//             <NavDropdown.Item as={Link} to={"/profile"}>Profile</NavDropdown.Item>
//             <NavDropdown.Item as={Link} to={"/login"}>Login</NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action5">
//                 Log Out
//             </NavDropdown.Item>
//         </NavDropdown>
//         {/* <Nav.Link href="#" disabled>
//           Link
//         </Nav.Link> */}
//       </Nav>
//       <Form className="d-flex">
//         <FormControl
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//         />
//         <Button variant="outline-dark">Search</Button>
//       </Form>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
//         </div>
//         <div>
//             <Switch>
//                 {/* <Route path="/">
//                     <Home />
//                 </Route> */}
//                 <Route path="/artists">
//                     <Artists />
//                 </Route>
//                 <Route path="/songs">
//                     <Songs />
//                 </Route>
//                 <Route path="/profile">
//                     <Profile />
//                 <Route path="/login">
//                     <Login />
//                 </Route>
//                 </Route>
//             </Switch>
//         </div>
//         </Router>
//     )
// };

// export default NavBarComponent;