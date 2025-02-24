import { Button, Table, Container, Row, Col, Form } from 'react-bootstrap';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const CartPage = () => {
  // Sample cart data - replace with real state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Organic Free-Range Eggs',
      price: 4.99,
      quantity: 2,
      image: '/images/eggs-organic.jpg'
    },
    {
      id: 2,
      name: 'Pasture-Raised Omega-3 Eggs',
      price: 5.49,
      quantity: 1,
      image: '/images/eggs-omega.jpg'
    }
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = itemId => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 3.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <Container className="my-5">
      <h1 className="mb-4">Shopping Cart ({cartItems.length} items)</h1>
      
      <Row>
        <Col lg={8}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        className="me-3"
                      />
                      {item.name}
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <FaMinus />
                      </Button>
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        min="1"
                        style={{ width: '70px' }}
                        onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                      />
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <FaPlus />
                      </Button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col lg={4}>
          <div className="card p-3 shadow">
            <h4>Order Summary</h4>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <h5>Total:</h5>
              <h5>${total.toFixed(2)}</h5>
            </div>
            
            <Form.Group className="mb-3">
              <Form.Label>Promo Code</Form.Label>
              <div className="d-flex gap-2">
                <Form.Control type="text" placeholder="Enter promo code" />
                <Button variant="outline-secondary">Apply</Button>
              </div>
            </Form.Group>

            <Button variant="warning" size="lg" className="w-100">
              Proceed to Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;