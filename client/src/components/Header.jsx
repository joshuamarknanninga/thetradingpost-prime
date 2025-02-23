import { Navbar, Form, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const cartItemsCount = 3; // Replace with real cart state

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>EggsMarket</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex mx-auto" style={{ width: '600px' }}>
            <Form.Control
              type="search"
              placeholder="Search for eggs (organic, free-range, etc.)"
              className="me-2"
            />
            <Button variant="warning">Search</Button>
          </Form>

          <div className="d-flex">
            <LinkContainer to="/cart">
              <Button variant="outline-light" className="me-2">
                <FaShoppingCart /> Cart
                {cartItemsCount > 0 && (
                  <Badge bg="danger" className="ms-1">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </LinkContainer>

            <LinkContainer to="/login">
              <Button variant="outline-light">
                <FaUser /> Sign In
              </Button>
            </LinkContainer>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;