import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Benefits.css';

const Benefits = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="benefits-wrapper">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/video/WhatsApp Video 2025-06-17 at 11.46.51 AM.mp4" type="video/mp4" />
      </video>

      <div className="benefits-content">
        <div className="benefit-box">
          <div className="benefit-icon">🕒</div>
          <h3>Business Continuity</h3>
          <p>
            Robust infrastructure minimizes downtime and ensures your critical systems remain
            operational even during disruptions. Every minute of downtime costs not just money,
            but customer trust and competitive advantage.
          </p>
          <div className="benefit-bottom">🕒 99.99% uptime guarantee</div>
        </div>

        <div className="benefit-box">
          <div className="benefit-icon">🛡️</div>
          <h3>Security & Compliance</h3>
          <p>
            Modern infrastructure provides multiple layers of protection against evolving cyber
            threats while ensuring regulatory compliance. As threats grow more sophisticated,
            your infrastructure must evolve to match.
          </p>
          <div className="benefit-bottom">🛡️ Enterprise-grade protection</div>
        </div>

        <div className="benefit-box">
          <div className="benefit-icon">⚡</div>
          <h3>Competitive Advantage</h3>
          <p>
            Agile, scalable infrastructure enables faster innovation, better customer experiences,
            and more efficient operations. Companies with optimized infrastructure can pivot faster
            and capitalize on new <br></br> opportunities.
          </p>
          <div className="benefit-bottom">⚡ Accelerate time to market</div>
        </div>
      </div>

      <div className="benefit-button-wrapper">
        {/* Button with onClick using navigate("/form") */}
        <button 
          className="benefit-button" 
          onClick={() => navigate("/form")} // Corrected: navigate directly to /form
        >
          ASSESS YOUR INFRASTRUCTURE
        </button>
      </div>
    </div>
  );
};

export default Benefits;
