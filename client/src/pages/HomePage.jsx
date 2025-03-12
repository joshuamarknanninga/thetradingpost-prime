import { useState, useEffect } from 'react';
import { Row, Col, Container, Carousel, Form } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { FaSearch, FaTruck, FaLeaf, FaShieldAlt } from 'react-icons/fa';

const HomePage = () => {
  // Sample data - replace with API call
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Organic Free-Range Eggs',
      price: 4.99,
      rating: 4.5,
      farm: 'Green Valley Farms',
      location: 'Local (50km)',
      image: '/images/eggs-organic.jpg',
      stock: 15,
      carbonScore: 92,
      isVerifiedFarm: true,
      hasLocalDelivery: true
    },
    {
      id: 2,
      name: 'Pasture-Raised Omega-3 Eggs',
      price: 5.49,
      rating: 4.8,
      farm: 'Sunny Meadows',
      location: 'Regional (150km)',
      image: '/images/eggs-omega.jpg',
      stock: 0,
      carbonScore: 88,
      isVerifiedFarm: true,
      hasLocalDelivery: false
    },
    {
      id: 3,
      name: 'Heritage Breed Eggs',
      price: 6.99,
      rating: 4.7,
      farm: 'Old Country Farm',
      location: 'Local (30km)',
      image: '/images/eggs-heritage.jpg',
      stock: 8,
      carbonScore: 95,
      isVerifiedFarm: true,
      hasLocalDelivery: true
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid>
      {/* Hero Carousel */}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner1.jpg"
            alt="Fresh Eggs"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Farm-Fresh Eggs Delivered to Your Door</h3>
            <p>Support local farmers, enjoy premium quality</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner2.jpg"
            alt="Happy Chickens"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Ethically Raised, Naturally Fed</h3>
            <p>Our chickens are free-range and happy</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Search Bar */}
      <Container className="mb-5">
        <Form className="mx-auto" style={{ maxWidth: '800px' }}>
          <div className="input-group">
            <Form.Control
              type="search"
              placeholder="Search for eggs (organic, free-range, etc.)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="warning">
              <FaSearch /> Search
            </Button>
          </div>
        </Form>
      </Container>

      {/* Trust Badges */}
      <Container className="text-center mb-5">
        <Row className="g-4">
          <Col md={3}>
            <div className="p-3 border rounded">
              <FaTruck size={32} className="mb-2" />
              <h5>Same-Day Delivery</h5>
              <p className="text-muted mb-0">Fresh to your door</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded">
              <FaLeaf size={32} className="mb-2" />
              <h5>Sustainable Farming</h5>
              <p className="text-muted mb-0">Eco-friendly practices</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded">
              <FaShieldAlt size={32} className="mb-2" />
              <h5>Verified Farms</h5>
              <p className="text-muted mb-0">Quality guaranteed</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded">
              <FaLeaf size={32} className="mb-2" />
              <h5>Carbon Neutral</h5>
              <p className="text-muted mb-0">Low environmental impact</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Product Grid */}
      <Container>
        <h2 className="mb-4">Fresh Eggs Near You</h2>
        <Row>
          {filteredProducts.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;