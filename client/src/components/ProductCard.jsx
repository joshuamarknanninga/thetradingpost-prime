import { Card, Button, Badge, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaStar, 
  FaLeaf, 
  FaCheckCircle, 
  FaShippingFast,
  FaBoxOpen,
  FaExclamationTriangle 
} from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={product.image} />
      
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          {/* Feature 3: Farm Verification */}
          {product.isVerifiedFarm && (
            <Badge bg="success" className="me-1">
              <FaCheckCircle /> Verified Farm
            </Badge>
          )}
          
          {/* Feature 1: Local Delivery */}
          {product.hasLocalDelivery && (
            <Badge bg="primary" className="me-1">
              <FaShippingFast /> Same-day Delivery
            </Badge>
          )}
          
          <Badge bg="info">{product.farm}</Badge>
        </div>

        {/* Feature 2: Sustainability Metrics */}
        <div className="mb-2">
          <div className="d-flex align-items-center text-success">
            <FaLeaf className="me-1" />
            <small>Carbon Score:</small>
            <ProgressBar now={product.carbonScore} 
              className="ms-2 w-50" 
              label={`${product.carbonScore}%`} 
              variant="success" />
          </div>
        </div>

        <Card.Title>
          <Link to={`/product/${product.id}`} className="text-decoration-none">
            {product.name}
          </Link>
        </Card.Title>

        <div className="mt-auto">
          {/* Feature 4: Live Inventory */}
          <div className="mb-2">
            {product.stock > 0 ? (
              <span className="text-success">
                <FaBoxOpen /> In Stock ({product.stock} dozen available)
              </span>
            ) : (
              <span className="text-danger">
                <FaExclamationTriangle /> Out of Stock
              </span>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="h4">${product.price}</span>
              <span className="text-muted">/dozen</span>
            </div>
            <Button variant="warning" disabled={product.stock === 0}>
              {product.stock > 0 ? 'Add to Cart' : 'Notify Me'}
            </Button>
          </div>

          <div className="mt-2 text-warning">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} 
                className={i < product.rating ? 'filled-star' : 'empty-star'} 
              />
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;