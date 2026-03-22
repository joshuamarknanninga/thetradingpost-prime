import { useMemo, useState } from 'react';
import { FaAward, FaBitcoin, FaCreditCard, FaGamepad, FaGift, FaMobileAlt } from 'react-icons/fa';

const starterTasks = [
  'Complete seller profile',
  'Add your first listing',
  'Enable at least two payment methods',
  'Describe your trade / barter preferences',
];

const SellerDashboard = () => {
  const [profile, setProfile] = useState({
    businessName: '',
    region: '',
    specialty: 'wares',
    cashApp: true,
    cards: true,
    crypto: false,
    barter: true,
    summary: '',
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setProfile((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const completion = useMemo(() => {
    const checks = [
      Boolean(profile.businessName),
      Boolean(profile.region),
      Boolean(profile.summary),
      profile.cashApp || profile.cards || profile.crypto || profile.barter,
    ];

    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  }, [profile]);

  return (
    <div className="page-stack">
      <section className="section-block">
        <div className="container seller-layout">
          <div className="card-surface seller-panel">
            <span className="eyebrow">Seller setup form</span>
            <h1>Enter the Trading Post</h1>
            <p>
              This form is structured for physical wares, preparations, lessons, and
              non-physical offers with flexible payment and barter settings.
            </p>

            <form className="seller-form">
              <label>
                Seller or business name
                <input name="businessName" value={profile.businessName} onChange={handleChange} placeholder="Trailblazer Supply Co." />
              </label>
              <label>
                Service region / meetup area
                <input name="region" value={profile.region} onChange={handleChange} placeholder="North county, downtown, mobile delivery radius" />
              </label>
              <label>
                Primary specialty
                <select name="specialty" value={profile.specialty} onChange={handleChange}>
                  <option value="wares">Physical wares</option>
                  <option value="preparedness">Preparations / survival supplies</option>
                  <option value="lessons">Lessons / tutoring / consulting</option>
                  <option value="digital">Non-physical wares</option>
                </select>
              </label>

              <fieldset>
                <legend>Accepted payment methods</legend>
                <div className="checkbox-grid">
                  <label><input type="checkbox" name="cashApp" checked={profile.cashApp} onChange={handleChange} /> <FaMobileAlt /> Cash App</label>
                  <label><input type="checkbox" name="cards" checked={profile.cards} onChange={handleChange} /> <FaCreditCard /> Credit cards</label>
                  <label><input type="checkbox" name="crypto" checked={profile.crypto} onChange={handleChange} /> <FaBitcoin /> Cryptocurrency</label>
                  <label><input type="checkbox" name="barter" checked={profile.barter} onChange={handleChange} /> <FaGift /> Trade / barter</label>
                </div>
              </fieldset>

              <label>
                Seller summary
                <textarea
                  name="summary"
                  rows="5"
                  value={profile.summary}
                  onChange={handleChange}
                  placeholder="Share what you sell, what you can trade for, and any lessons or services you offer."
                />
              </label>
            </form>
          </div>

          <aside className="seller-side-column">
            <article className="card-surface side-card">
              <div className="panel-heading">
                <span className="pill"><FaGamepad /> Gamified progress</span>
                <strong>{completion}% complete</strong>
              </div>
              <div className="progress-track large">
                <span style={{ width: `${completion}%` }} />
              </div>
              <ul className="score-list compact">
                {starterTasks.map((task) => (
                  <li key={task}><FaAward /> {task}</li>
                ))}
              </ul>
            </article>

            <article className="card-surface side-card">
              <h2>Profile preview</h2>
              <p><strong>Name:</strong> {profile.businessName || 'Your seller name'}</p>
              <p><strong>Region:</strong> {profile.region || 'Add your delivery / meetup area'}</p>
              <p><strong>Specialty:</strong> {profile.specialty}</p>
              <p><strong>Summary:</strong> {profile.summary || 'Describe your wares, services, lessons, or prep offerings.'}</p>
            </article>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default SellerDashboard;
