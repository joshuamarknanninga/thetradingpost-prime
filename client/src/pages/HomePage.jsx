const HomePage = () => {
    const products = [
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
      // Add more products...
    ];
  
    return (
      <>
        <h1 className="my-4">Fresh Eggs Near You</h1>
        <Row>
          {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </>
    );
  };