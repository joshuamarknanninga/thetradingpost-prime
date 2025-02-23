const SellerDashboard = () => {
    const [listings, setListings] = useState([
      {
        id: 1,
        name: 'Organic Free-Range Eggs',
        price: 4.99,
        stock: 15,
        sales: 120,
        carbonScore: 92,
        deliveryAvailable: true
      },
      // Add more listings...
    ]);
  
    return (
      <div>
        <div className="d-flex justify-content-between mb-4">
          <h2>Your Egg Listings</h2>
          <Button variant="success">Add New Listing</Button>
        </div>
  
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Carbon Score</th>
              <th>Delivery</th>
              <th>Sales</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map(listing => (
              <tr key={listing.id}>
                <td>{listing.name}</td>
                <td>${listing.price}</td>
                <td>
                  <Form.Control 
                    type="number" 
                    value={listing.stock}
                    onChange={(e) => handleStockChange(listing.id, e.target.value)}
                    min="0"
                    style={{ width: '80px' }}
                  />
                </td>
                <td>
                  <Badge bg="success">
                    {listing.carbonScore}/100
                  </Badge>
                </td>
                <td>
                  <Form.Check 
                    type="checkbox" 
                    checked={listing.deliveryAvailable}
                    onChange={() => toggleDelivery(listing.id)}
                    label="Local Delivery"
                  />
                </td>
                <td>{listing.sales}</td>
                <td>
                  <Button variant="info" size="sm" className="me-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };