import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container className="justify-content-center">
        <div className="text-light">
          © {new Date().getFullYear()} EggsMarket - Connecting Local Farmers
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;