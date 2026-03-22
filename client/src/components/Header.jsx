import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCoins, FaCreditCard, FaMobileAlt, FaStore } from 'react-icons/fa';

const navItems = [
  { label: 'Marketplace', to: '/' },
  { label: 'Featured Listing', to: '/product/featured' },
  { label: 'Checkout', to: '/cart' },
  { label: 'Join & Sell', to: '/sell' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand-mark" onClick={() => setMenuOpen(false)}>
          <span className="brand-icon"><FaStore /></span>
          <span>
            <strong>The Trading Post Prime</strong>
            <small>eBay + Amazon + Waze inspired local exchange</small>
          </span>
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-pills">
          <span><FaMobileAlt /> Android • iPhone • Desktop</span>
          <span><FaCreditCard /> Cards + Cash App</span>
          <span><FaCoins /> Crypto + Trade</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
