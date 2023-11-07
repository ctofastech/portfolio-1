// there are 3 ways to create a component
// method 1: default functional component
// method 2: arrow function component
// method 3: default return component
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

// method 1
export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand> <Link style={{textDecoration: 'none', color: "black"}} to={"/"}> Fahad</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link><Link style={{textDecoration: 'none', color: "black"}} to={"/"}> Home</Link></Nav.Link>
                            <Nav.Link> <Link style={{textDecoration: 'none', color: "black"}} to={"/all-projects"}> Projects </Link></Nav.Link>
                            <NavDropdown title="Reviews" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Buyer Review</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Seller Review
                                </NavDropdown.Item>
                                {/*<NavDropdown.Divider />*/}
                                {/*<NavDropdown.Item href="#action5">*/}
                                {/*    Something else here*/}
                                {/*</NavDropdown.Item>*/}
                            </NavDropdown>
                            <Nav.Link href="#">
                                Contact Us
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            {/*<Form.Control*/}
                            {/*    type="search"*/}
                            {/*    placeholder="Search"*/}
                            {/*    className="me-2"*/}
                            {/*    aria-label="Search"*/}
                            {/*/>*/}
                            <Button variant="dark">Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
