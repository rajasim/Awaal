import React from "react";
import "./EfficiencyBoxes.css";

function EfficiencyBoxes() {
  return (
    <div className="service-cards">
      <div className="card card-blue">
        <div className="icon">🧠</div>
        <h4>AI Model Development</h4>
        <p>
          Custom AI solutions designed to address your specific business challenges and opportunities.
        </p>
      </div>
      <div className="card card-purple">
        <div className="icon">🔁</div>
        <h4>Process Automation</h4>
        <p>
          Streamline operations and reduce manual tasks with intelligent automation workflows.
        </p>
      </div>
      <div className="card card-green">
        <div className="icon">📈</div>
        <h4>Data Analytics</h4>
        <p>
          Transform raw data into actionable insights with advanced analytics and visualization.
        </p>
      </div>
    </div>
  );
}

export default EfficiencyBoxes;
