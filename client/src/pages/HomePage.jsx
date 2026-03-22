import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaApple,
  FaBitcoin,
  FaBoxOpen,
  FaCarSide,
  FaCheckCircle,
  FaChevronRight,
  FaCreditCard,
  FaGamepad,
  FaGift,
  FaGraduationCap,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaRegLightbulb,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaStore,
  FaTools,
  FaUsers,
} from 'react-icons/fa';

const categories = [
  { title: 'Physical wares', icon: <FaBoxOpen />, description: 'Tools, collectibles, prep kits, local goods, and handcrafted inventory.' },
  { title: 'Lessons & coaching', icon: <FaGraduationCap />, description: 'Music, trades, homesteading, tutoring, and on-demand community knowledge.' },
  { title: 'Preparedness', icon: <FaShieldAlt />, description: 'Emergency supplies, solar gear, storage systems, and neighborhood-ready packs.' },
  { title: 'Non-physical offers', icon: <FaRegLightbulb />, description: 'Consulting, guides, reservations, subscriptions, classes, and digital access.' },
];

const quests = [
  'Complete your seller profile to unlock the Pathfinder badge.',
  'List one product, one service, and one barter-ready offer.',
  'Enable two payment methods to raise trust and checkout conversion.',
  'Add local meetup zones so buyers can discover you faster.',
];

const listings = [
  {
    id: 'solar-kit',
    title: '72-hour Family Prep Kit',
    price: '$149',
    score: 98,
    type: 'Preparedness',
    payment: 'Cards • Cash App • BTC',
    trade: 'Will trade for canning lessons or farm eggs',
  },
  {
    id: 'guitar-lessons',
    title: 'Beginner Guitar Lessons',
    price: '$35 / session',
    score: 93,
    type: 'Lesson',
    payment: 'Cards • Cash App • Trade',
    trade: 'Will trade for garden produce or design help',
  },
  {
    id: 'homestead-tools',
    title: 'Restored Homestead Tool Bundle',
    price: '$220',
    score: 95,
    type: 'Physical ware',
    payment: 'Cards • Cash App • ETH',
    trade: 'Will trade for generator maintenance or camping gear',
  },
];

const paymentOptions = [
  { label: 'Cash App', icon: <FaMobileAlt />, detail: 'Fast mobile payments for in-person or local delivery orders.' },
  { label: 'Credit cards', icon: <FaCreditCard />, detail: 'Major-card style checkout with confidence-building payment copy.' },
  { label: 'Cryptocurrency', icon: <FaBitcoin />, detail: 'Support BTC, ETH, and stablecoin-ready checkout pathways.' },
  { label: 'Trade / barter', icon: <FaGift />, detail: 'Let buyers propose wares, lessons, labor, or services in exchange.' },
];

const deviceStats = [
  { label: 'Mobile-first controls', value: '48px+', icon: <FaMobileAlt /> },
  { label: 'Desktop quick compare', value: '3-up', icon: <FaStore /> },
  { label: 'Apple friendly layout', value: 'Safari-ready', icon: <FaApple /> },
  { label: 'Local route discovery', value: 'Waze-style', icon: <FaMapMarkedAlt /> },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    listingType: 'physical wares',
    acceptsCashApp: true,
    acceptsCards: true,
    acceptsCrypto: false,
    acceptsTrade: true,
    details: '',
  });

  const filteredListings = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return listings;

    return listings.filter((listing) =>
      [listing.title, listing.type, listing.payment, listing.trade]
        .join(' ')
        .toLowerCase()
        .includes(query)
    );
  }, [searchTerm]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const selectedPayments = [
    formState.acceptsCashApp && 'Cash App',
    formState.acceptsCards && 'Credit Cards',
    formState.acceptsCrypto && 'Crypto',
    formState.acceptsTrade && 'Trade / Barter',
  ].filter(Boolean);

  return (
    <div className="page-stack">
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Responsive React marketplace</span>
            <h1>Build a gamified trading post that feels familiar, trusted, and local.</h1>
            <p className="hero-copy">
              This concept combines the marketplace depth of eBay and Amazon with
              Waze-style local discovery so users can buy, barter, learn, and offer
              services on Android phones, Apple devices, and desktop computers.
            </p>
            <div className="hero-actions">
              <Link className="button-primary" to="/sell">Open the seller intake form</Link>
              <Link className="button-secondary" to="/product/featured">View a featured listing</Link>
            </div>
            <div className="hero-badges">
              <span><FaGamepad /> Quest-driven onboarding</span>
              <span><FaCarSide /> Local meetup routing</span>
              <span><FaCheckCircle /> Trust, reviews, and flexible payment rails</span>
            </div>
          </div>
          <aside className="hero-panel card-surface">
            <div className="panel-heading">
              <span className="pill">Launch scoreboard</span>
              <strong>Marketplace readiness: 92%</strong>
            </div>
            <ul className="score-list">
              {quests.map((quest) => (
                <li key={quest}><FaChevronRight /> {quest}</li>
              ))}
            </ul>
            <div className="panel-progress">
              <div className="progress-track">
                <span style={{ width: '92%' }} />
              </div>
              <small>Next unlock: Verified Trailblazer seller rank</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Cross-platform readiness</span>
              <h2>Optimized for thumbs, keyboards, and real-world pickup flow.</h2>
            </div>
          </div>
          <div className="stats-grid">
            {deviceStats.map((stat) => (
              <article key={stat.label} className="card-surface stat-card">
                <span className="stat-icon">{stat.icon}</span>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">What users can list</span>
              <h2>Support products, trades, services, and experiences from day one.</h2>
            </div>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.title} className="card-surface category-card">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Search and discovery</span>
              <h2>Find high-trust listings with marketplace filtering.</h2>
            </div>
            <label className="search-shell" htmlFor="searchListings">
              <FaSearch />
              <input
                id="searchListings"
                type="search"
                placeholder="Search wares, lessons, crypto-ready listings, barter offers..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          <div className="listing-grid">
            {filteredListings.map((listing) => (
              <article key={listing.id} className="card-surface listing-card">
                <div className="listing-topline">
                  <span className="pill pill-soft">{listing.type}</span>
                  <span className="trust-score">Trust score {listing.score}</span>
                </div>
                <h3>{listing.title}</h3>
                <p className="listing-price">{listing.price}</p>
                <p><strong>Accepted:</strong> {listing.payment}</p>
                <p><strong>Trade option:</strong> {listing.trade}</p>
                <Link to={`/product/${listing.id}`} className="listing-link">Explore listing</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block alt-surface">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Payment flexibility</span>
              <h2>Give sellers modern checkout rails and barter-friendly negotiation.</h2>
            </div>
          </div>
          <div className="payment-grid">
            {paymentOptions.map((option) => (
              <article key={option.label} className="card-surface payment-card">
                <span className="payment-icon">{option.icon}</span>
                <h3>{option.label}</h3>
                <p>{option.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container onboarding-grid">
          <div>
            <span className="eyebrow">Join the trading post</span>
            <h2>Create the intake form sellers and service providers need.</h2>
            <p>
              This onboarding experience captures the basics for physical wares,
              lessons, preparedness kits, and non-physical offers while previewing
              which payment methods each seller accepts.
            </p>
            <div className="feature-list">
              <span><FaRocket /> Seller progress and rank incentives</span>
              <span><FaUsers /> Community reputation and reviews</span>
              <span><FaTools /> Trade-friendly listing setup for wares and services</span>
            </div>
          </div>

          <form className="card-surface onboarding-form">
            <div className="form-grid">
              <label>
                Display name
                <input name="name" value={formState.name} onChange={handleChange} placeholder="Trading Post handle" />
              </label>
              <label>
                Email
                <input name="email" type="email" value={formState.email} onChange={handleChange} placeholder="name@example.com" />
              </label>
            </div>

            <label>
              Primary listing type
              <select name="listingType" value={formState.listingType} onChange={handleChange}>
                <option value="physical wares">Physical wares</option>
                <option value="lessons">Lessons</option>
                <option value="preparedness supplies">Preparedness supplies</option>
                <option value="non-physical wares">Non-physical wares</option>
              </select>
            </label>

            <fieldset>
              <legend>Accepted payment methods</legend>
              <div className="checkbox-grid">
                <label><input name="acceptsCashApp" type="checkbox" checked={formState.acceptsCashApp} onChange={handleChange} /> Cash App</label>
                <label><input name="acceptsCards" type="checkbox" checked={formState.acceptsCards} onChange={handleChange} /> Credit cards</label>
                <label><input name="acceptsCrypto" type="checkbox" checked={formState.acceptsCrypto} onChange={handleChange} /> Cryptocurrency</label>
                <label><input name="acceptsTrade" type="checkbox" checked={formState.acceptsTrade} onChange={handleChange} /> Trade / barter</label>
              </div>
            </fieldset>

            <label>
              What do you want to offer?
              <textarea
                name="details"
                rows="4"
                value={formState.details}
                onChange={handleChange}
                placeholder="Example: heirloom tools, emergency prep classes, remote consulting, music lessons, barter-ready produce..."
              />
            </label>

            <div className="form-preview">
              <strong>Seller profile preview</strong>
              <p>
                <span>{formState.name || 'Your seller name'}</span> • <span>{formState.listingType}</span>
              </p>
              <p>Accepted methods: {selectedPayments.join(', ') || 'Select at least one payment type'}</p>
            </div>

            <Link className="button-primary full-width" to="/sell">Continue seller setup</Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
