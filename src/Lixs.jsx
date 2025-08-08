import React from 'react';
import './Lixs.css';

const Lixs = () => {
  return (
    <div className="lixs-container">
      <header className="header">
        <h1>
          Why We're <span className="gradient-text">Different</span>
        </h1>
        <p>
          Traditional IT firms offer generic solutions. We build industry-specific security that actually works for your business.
        </p>
      </header>

      <section className="comparison-section">
        <h2>Traditional vs. Revolutionary</h2>
        <p className="subtitler">
          See the stark differences that set us apart from conventional IT firms
        </p>

        <div className="comparison-table">
          <div className="table-row header-row">
            <div className="column traditional">Traditional IT Firms</div>
            <div className="column awwad">Awwal</div>
          </div>

          <div className="table-row">
            <div className="column traditional">❌ Generic solutions for all industries</div>
            <div className="column awwad">✅ Industry-tailored systems (Healthcare, Hotels, Banks, etc.)</div>
          </div>

          <div className="table-row">
            <div className="column traditional">⚙️ Focus on deployment</div>
            <div className="column awwad">🎯 Focus on outcomes</div>
          </div>

          <div className="table-row">
            <div className="column traditional">🔐 Add security later</div>
            <div className="column awwad">🧱 Build security into every layer</div>
          </div>

          <div className="table-row">
            <div className="column traditional">💿 Sell software licenses</div>
            <div className="column awwad">🛠️ Build scalable, owned IP</div>
          </div>

          <div className="table-row">
            <div className="column traditional">🚫 No client understanding</div>
            <div className="column awwad">🤝 Collaborative from day one</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lixs;
