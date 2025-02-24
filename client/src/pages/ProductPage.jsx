import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Badge, Tab, Tabs } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { FaStar, FaTruck, FaLeaf, FaShieldAlt, FaShoppingCart } from 'react-icons/fa';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample data - replace with API call
  useEffect(() => {
    const fetchProduct = async () => {
      setTimeout(() => {
        setProduct({
          id: 1,
          name: 'Organic Free-Range Eggs',
          price: 4.99,
          rating: 4.5,
          farm: 'Green Valley Farms',
          location: 'Local (50km)',
          description: 'Premium organic eggs from free-range chickens raised on natural feed without antibiotics or hormones.',
          images: [
            '/images/eggs-organic-1.jpg',
            '/images/eggs-organic-2.jpg',
            '/images/eggs-organic-3.jpg'
          ],
          stock: 15,
          carbonScore: 92,
          isVerifiedFarm: true,
          hasLocalDelivery: true,
          specifications: {
            eggType: 'Large Brown',
            certification: 'USDA Organic',
            farmSize: 'Small Family Farm',
            hensDiet: 'Non-GMO Grains & Insects'
          },
          reviews: [
            { 
              id: 1, 
              user: 'Sarah M.', 
              rating: 5, 
              text: "Freshest eggs I've ever bought!" // Fixed with double quotes
            },
            { 
              id: 2, 
              user: 'John P.', 
              rating: 4, 
              text: 'Great taste and good packaging' 
            }
          ]
        });
        setLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Container className="text-center my-5">Loading...</Container>;
  if (!product) return <Container className="text-center my-5">Product not found</Container>;

  return (
    <Container className="my-5">
      <Row>
        {/* Product Images */}
        <Col md={6}>
          <div className="sticky-top" style={{ top: '20px' }}>
            <Image src={product.images[0]} fluid className="mb-3 rounded shadow" />
            <div className="d-flex gap-2">
              {product.images.map((img, index) => (
                <Image key={index} src={img} fluid className="col-4 rounded shadow-sm" />
              ))}
            </div>
          </div>
        </Col>

        {/* Product Details */}
        <Col md={6}>
          <h1>{product.name}</h1>
          <div className="d-flex align-items-center mb-3">
            <div className="text-warning me-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < product.rating ? 'filled-star' : 'empty-star'} />
              ))}
            </div>
            <span className="text-muted">(128 reviews)</span>
          </div>

          <div className="mb-4">
            <h2 className="text-success">${product.price}</h2>
            <small className="text-muted">per dozen</small>
          </div>

          {/* Trust Badges */}
          <div className="d-flex flex-wrap gap-2 mb-4">
            {product.hasLocalDelivery && (
              <Badge bg="primary" className="d-flex align-items-center">
                <FaTruck className="me-1" /> Same-day Delivery
              </Badge>
            )}
            {product.isVerifiedFarm && (
              <Badge bg="success" className="d-flex align-items-center">
                <FaShieldAlt className="me-1" /> Verified Farm
              </Badge>
            )}
            <Badge bg="warning" className="d-flex align-items-center">
              <FaLeaf className="me-1" /> Carbon Score {product.carbonScore}/100
            </Badge>
          </div>

          {/* Add to Cart */}
          <div className="card p-3 mb-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="h5 mb-0">In Stock: {product.stock} dozen</span>
              <Button variant="warning" size="lg">
                <FaShoppingCart className="me-2" /> Add to Cart
              </Button>
            </div>
            <small className="text-muted">Order within 5 hours for same-day delivery</small>
          </div>

          {/* Product Tabs */}
          <Tabs defaultActiveKey="description" className="mb-4">
            <Tab eventKey="description" title="Description">
              <div className="p-3">
                <p>{product.description}</p>
                <ul>
                  <li>Egg Type: {product.specifications.eggType}</li>
                  <li>Certification: {product.specifications.certification}</li>
                  <li>Farm Size: {product.specifications.farmSize}</li>
                  <li>Hen's Diet: {product.specifications.hensDiet}</li>
                </ul>
              </div>
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              <div className="p-3">
                {product.reviews.map(review => (
                  <div key={review.id} className="mb-3">
                    <div className="d-flex align-items-center">
                      <strong className="me-2">{review.user}</strong>
                      <div className="text-warning">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < review.rating ? 'filled-star' : 'empty-star'} />
                        ))}
                      </div>
                    </div>
                    <p className="mb-0">{review.text}</p>
                  </div>
                ))}
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      {/* Related Products */}
      <h3 className="mt-5 mb-4">More from {product.farm}</h3>
      <Row>
        {[1, 2, 3, 4].map(item => (
          <Col key={item} md={3}>
            <ProductCard product={{
              ...product,
              id: item,
              name: `${product.name} (Pack of ${item})`,
              price: product.price * item
            }} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;