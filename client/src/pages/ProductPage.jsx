import { Link, useParams } from 'react-router-dom';
import { FaBitcoin, FaCheckCircle, FaClock, FaCreditCard, FaMapMarkerAlt, FaShieldAlt, FaTools } from 'react-icons/fa';

const listingDetails = {
  featured: {
    title: 'Community Prep & Skills Bundle',
    price: '$189',
    category: 'Preparedness + lessons',
    seller: 'Trailblazer Supply Co.',
    description:
      'A hybrid listing that combines a 72-hour preparedness kit, a one-hour local setup lesson, and an optional barter pathway for additional gear or services.',
  },
  'solar-kit': {
    title: '72-hour Family Prep Kit',
    price: '$149',
    category: 'Preparedness',
    seller: 'Beacon Ridge Outfitters',
    description:
      'Compact family emergency kit with food storage, first-aid essentials, and meetup-ready local delivery coordination.',
  },
  'guitar-lessons': {
    title: 'Beginner Guitar Lessons',
    price: '$35 / session',
    category: 'Lesson',
    seller: 'Campfire Music Co-op',
    description:
      'One-on-one lessons available in person or online, with barter options for goods, produce, or household repair help.',
  },
  'homestead-tools': {
    title: 'Restored Homestead Tool Bundle',
    price: '$220',
    category: 'Physical ware',
    seller: 'Second Wind Workshop',
    description:
      'Restored hand tools with trusted condition notes, pickup planning, and optional crypto-enabled checkout.',
  },
};

const ProductPage = () => {
  const { id } = useParams();
  const listing = listingDetails[id] || listingDetails.featured;

  return (
    <div className="page-stack">
      <section className="section-block">
        <div className="container product-layout">
          <div className="card-surface product-hero-card">
            <span className="pill">{listing.category}</span>
            <h1>{listing.title}</h1>
            <p className="listing-price">{listing.price}</p>
            <p>{listing.description}</p>

            <div className="feature-list compact">
              <span><FaCheckCircle /> Verified listing flow</span>
              <span><FaMapMarkerAlt /> Local meetup and delivery guidance</span>
              <span><FaClock /> Fast checkout with saved preferences</span>
            </div>

            <div className="product-actions">
              <Link to="/cart" className="button-primary">Go to checkout options</Link>
              <Link to="/sell" className="button-secondary">List something similar</Link>
            </div>
          </div>

          <aside className="product-side-panel">
            <article className="card-surface side-card">
              <h2>Seller trust snapshot</h2>
              <ul className="info-list">
                <li><strong>Seller:</strong> {listing.seller}</li>
                <li><strong>Rank:</strong> Pathfinder • 4.9/5 satisfaction</li>
                <li><strong>Specialty:</strong> Products + services + barter offers</li>
              </ul>
            </article>

            <article className="card-surface side-card">
              <h2>Accepted payment methods</h2>
              <ul className="icon-list">
                <li><FaCreditCard /> Major credit and debit cards</li>
                <li><FaBitcoin /> BTC / ETH / stablecoin-ready options</li>
                <li><FaShieldAlt /> Cash App for local pickup and delivery</li>
                <li><FaTools /> Trade offers for wares, lessons, and labor</li>
              </ul>
            </article>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
