import { Link } from 'react-router-dom';
import { FaBitcoin, FaCreditCard, FaHandHoldingUsd, FaQrcode, FaTools } from 'react-icons/fa';

const checkoutMethods = [
  {
    title: 'Cash App pickup pay',
    icon: <FaQrcode />,
    detail: 'Ideal for local meetups, same-day delivery, and mobile-first orders.',
  },
  {
    title: 'Credit / debit cards',
    icon: <FaCreditCard />,
    detail: 'Familiar mainstream checkout for fast conversion and trust.',
  },
  {
    title: 'Cryptocurrency',
    icon: <FaBitcoin />,
    detail: 'Enable BTC, ETH, or stablecoin acceptance for modern buyers.',
  },
  {
    title: 'Trade submission',
    icon: <FaTools />,
    detail: 'Let buyers propose wares, services, lessons, or prep supplies in exchange.',
  },
];

const CartPage = () => {
  return (
    <div className="page-stack">
      <section className="section-block">
        <div className="container checkout-layout">
          <div className="card-surface checkout-summary">
            <span className="eyebrow">Checkout blueprint</span>
            <h1>Offer multiple ways to close the deal.</h1>
            <p>
              The checkout experience can present standard card flow, Cash App
              instructions, crypto wallet handoff, and a barter proposal form in the
              same responsive React experience.
            </p>
            <div className="summary-totals">
              <div><span>Featured bundle</span><strong>$189.00</strong></div>
              <div><span>Local delivery</span><strong>$12.00</strong></div>
              <div><span>Platform protection</span><strong>$6.00</strong></div>
              <div className="summary-total"><span>Order total</span><strong>$207.00</strong></div>
            </div>
            <div className="feature-list compact">
              <span><FaHandHoldingUsd /> Mobile-friendly payment CTA stack</span>
              <span><FaTools /> Trade offer intake for goods and services</span>
            </div>
          </div>

          <div className="checkout-methods">
            {checkoutMethods.map((method) => (
              <article key={method.title} className="card-surface payment-card">
                <span className="payment-icon">{method.icon}</span>
                <h2>{method.title}</h2>
                <p>{method.detail}</p>
              </article>
            ))}
            <Link to="/sell" className="button-primary full-width">Configure seller payment preferences</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
