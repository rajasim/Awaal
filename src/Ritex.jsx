import React from 'react';
import './Ritex.css';

const Ritex = () => {
  return (
    <div className="ritex-wrapper">
      <h2 className="ritex-heading">Our Core Website Development Services</h2>
      <p className="ritex-subheading">
        Transforming ideas into powerful digital experiences with cutting-edge technology and exceptional design.
      </p>

      <div className="ritex-cards">
        {/* Card 1 */}
        <div className="ritex-card">
          <div className="card-top top-purple">
            <img src="/images/icon-custom.png" alt="Custom Website" />
          </div>
          <h3>Custom Website Development</h3>
          <p>Tailored websites built from the ground up. No templates — just purpose-built solutions that drive engagement and results.</p>
          <ul>
            <li>Custom front-end & back-end development</li>
            <li>User-centric UI/UX design</li>
            <li>Database integration</li>
            <li>Built using HTML5, CSS3, JS, React, Laravel, etc.</li>
          </ul>
          <span className="tag tag-purple">Ideal for Startups, Enterprises, Tech Products, B2B Portals</span>
        </div>

        {/* Card 2 */}
        <div className="ritex-card">
          <div className="card-top top-orange">
            <img src="/images/box9.jpeg" alt="eCommerce" />
          </div>
          <h3>eCommerce Website Development</h3>
          <p>Feature-rich online stores with secure payment systems, inventory management, and smooth shopping flows.</p>
          <ul>
            <li>WooCommerce, Shopify, Magento, or custom-built</li>
            <li>Product filtering, cart & checkout flows</li>
            <li>Secure payment gateway integration</li>
            <li>Order tracking & CRM integration</li>
          </ul>
          <span className="tag tag-orange">Designed for: Retailers, D2C Brands, Marketplaces</span>
        </div>

        {/* Card 3 */}
        <div className="ritex-card">
          <div className="card-top top-teal">
            <img src="/images/icon-responsive.png" alt="Responsive Design" />
          </div>
          <h3>Responsive Web Design</h3>
          <p>Your site. Perfect on every device. We design responsive websites for desktop, tablet, and mobile for consistent experience.</p>
          <ul>
            <li>Mobile-first design principles</li>
            <li>Optimized layout and interactions</li>
            <li>Cross-browser compatibility</li>
            <li>Fast load speeds & performance tuning</li>
          </ul>
          <span className="tag tag-teal">100% tested on all major browsers and screen sizes</span>
        </div>

        {/* Row 2 — Card 4 */}
        <div className="ritex-card row-2">
          <div className="card-top top-blue">
            <img src="/images/icon-cms.png" alt="CMS" />
          </div>
          <h3>CMS Development</h3>
          <p>We develop flexible CMS platforms so your team can update and manage content without developers.</p>
          <ul>
            <li>WordPress, Drupal, Joomla, Strapi</li>
            <li>Custom-built headless CMS</li>
            <li>Blog/news modules, media galleries</li>
            <li>Role-based access & version control</li>
          </ul>
          <span className="tag tag-blue">Best for: Blogs, News Portals, Corporate Sites, Intranets</span>
        </div>

        {/* Row 2 — Card 5 */}
        <div className="ritex-card row-2">
          <div className="card-top top-pink">
            <img src="/images/icon-landing.png" alt="Landing Page" />
          </div>
          <h3>Landing Page & Microsite Design</h3>
          <p>Focused pages that convert — optimized for marketing, events, product launches, and lead capture.</p>
          <ul>
            <li>Conversion-optimized layouts</li>
            <li>Forms, CTAs, animations</li>
            <li>SEO-ready, fast loading</li>
            <li>Integrated with marketing tools</li>
          </ul>
          <span className="tag tag-pink">Great for: Campaigns, Product Launches, Lead Capture</span>
        </div>
      </div>
    </div>
  );
};

export default Ritex;
