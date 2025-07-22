import React from 'react';
import './Approach.css';

const Approach = () => {
  return (
    <section className="approach-section">
      <div className="approach-top">
        <p className="approach-label">Our Methodology</p>
        <h2 className="approach-title">Our Approach</h2>
        <p className="approach-subtext">
          We follow a systematic methodology to deliver infrastructure solutions that align with your business objectives.
        </p>
      </div>

      <div className="approach-steps">
        <div className="approach-card">
          <div className="step-number">1</div>
          <img src="/images/Apporouch 1.png" alt="Assessment" className="step-image" />
          <h3>Assessment</h3>
          <p>We begin with a comprehensive analysis of your current infrastructure, business requirements, and growth projections.</p>
          <ul>
            <li>Network audit</li>
            <li>Performance analysis</li>
            <li>Security evaluation</li>
          </ul>
        </div>

        <div className="approach-card">
          <div className="step-number">2</div>
          <img src="/images/Appourch 2.png" alt="Design" className="step-image" />
          <h3>Design</h3>
          <p>Our experts create a tailored infrastructure blueprint that optimizes performance, security, and scalability.</p>
          <ul>
            <li>Solution architecture</li>
            <li>Technology selection</li>
            <li>Capacity planning</li>
          </ul>
        </div>

        <div className="approach-card">
          <div className="step-number">3</div>
          <img src="/images/Apporouch 3 .png" alt="Implementation" className="step-image" />
          <h3>Implementation</h3>
          <p>We deploy solutions with minimal disruption to your operations, following industry best practices and rigorous testing.</p>
          <ul>
            <li>Phased deployment</li>
            <li>Quality assurance</li>
            <li>Knowledge transfer</li>
          </ul>
        </div>

        <div className="approach-card">
          <div className="step-number">4</div>
          <img src="/images/Apporouch 4.png" alt="Optimization" className="step-image" />
          <h3>Optimization</h3>
          <p>Continuous monitoring and improvement to ensure your infrastructure evolves with your business needs.</p>
          <ul>
            <li>Performance tuning</li>
            <li>Regular reviews</li>
            <li>Proactive upgrades</li>
          </ul>
        </div>
      </div>

      <div className="approach-bottom">
        <div className="partners">
          <h4>Technology Partners</h4>
          <p>We collaborate with industry-leading technology providers to deliver best in class infrastructure solutions tailored to your specific needs.</p>
          <div className="partner-logos">
            <img src="/images/cisco.png" alt="Cisco" />
            <img src="/images/vmware.png" alt="VMware" />
            <img src="/images/microsoft.png" alt="Microsoft" />
            <img src="/images/aws.png" alt="AWS" />
            <img src="/images/hpe.png" alt="HPE" />
            <img src="/images/dell.png" alt="Dell" />
          </div>
        </div>
        <div className="certifications">
          <h4>Certified Expertise</h4>
          <p>Our team holds advanced certifications from all major technology vendors, ensuring expert implementation and support.</p>
          <div className="cert-tags">
            <span>CCIE</span>
            <span>VCDX</span>
            <span>AWS Solutions Architect</span>
            <span>Azure Expert</span>
            <span>CISSP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
