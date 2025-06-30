import React from "react";
import "./Ktrox.css";

const Ktrox = () => {
  return (
    <section className="ktrox-section">
      <h2 className="ktrox-heading">Technologies We Use</h2>
      <p className="ktrox-subtext">
        Our tech stack is carefully selected to provide the best solutions for your projects.
        We leverage cutting-edge technologies to build robust, scalable, and efficient applications.
      </p>

      <div className="ktrox-grid">
        {/* Frontend */}
        <div className="tech-card tech-frontend">
          <div className="card-header">
            <img src="assets/icons/frontend.png" alt="Frontend" />
            Frontend
          </div>
          <ul>
            <li className="dot-react">React.js</li>
            <li className="dot-angular">Angular</li>
            <li className="dot-vue">Vue.js</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="tech-card tech-backend">
          <div className="card-header">
            <img src="assets/icons/backend.png" alt="Backend" />
            Backend
          </div>
          <ul>
            <li className="dot-node">Node.js</li>
            <li className="dot-python">Python</li>
            <li className="dot-java">Java</li>
            <li className="dot-net">.NET</li>
            <li className="dot-php">PHP</li>
          </ul>
        </div>

        {/* Mobile */}
        <div className="tech-card tech-mobile">
          <div className="card-header">
            <img src="assets/icons/mobile.png" alt="Mobile" />
            Mobile
          </div>
          <ul>
            <li className="dot-flutter">Flutter</li>
            <li className="dot-kotlin">Kotlin</li>
            <li className="dot-swift">Swift</li>
            <li className="dot-reactnative">React Native</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="tech-card tech-database">
          <div className="card-header">
            <img src="assets/icons/database.png" alt="Databases" />
            Databases
          </div>
          <ul>
            <li className="dot-postgres">PostgreSQL</li>
            <li className="dot-mongo">MongoDB</li>
            <li className="dot-mysql">MySQL</li>
            <li className="dot-firebase">Firebase</li>
          </ul>
        </div>

        {/* DevOps & Cloud */}
        <div className="tech-card tech-devops">
          <div className="card-header">
            <img src="assets/icons/devops.png" alt="DevOps" />
            DevOps & Cloud
          </div>
          <ul>
            <li className="dot-aws">AWS</li>
            <li className="dot-azure">Azure</li>
            <li className="dot-docker">Docker</li>
            <li className="dot-jenkins">Jenkins</li>
            <li className="dot-actions">GitHub Actions</li>
          </ul>
        </div>

        {/* API Tools */}
        <div className="tech-card tech-api">
          <div className="card-header">
            <img src="assets/icons/api.png" alt="API Tools" />
            API Tools
          </div>
          <ul>
            <li className="dot-postman">Postman</li>
            <li className="dot-swagger">Swagger</li>
            <li className="dot-graphql">GraphQL</li>
            <li className="dot-rest">REST APIs</li>
          </ul>
        </div>
      </div>

      <div className="ktrox-button-wrapper">
        <button className="ktrox-button">Explore Our Solutions →</button>
      </div>
    </section>
  );
};

export default Ktrox;
