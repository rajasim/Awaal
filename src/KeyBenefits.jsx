import React from "react";
import {
  Clock,
  ShieldCheck,
  Layout,
  DollarSign,
  UserCheck
} from "lucide-react";
import "./KeyBenefits.css";

function KeyBenefits() {
  return (
    <div className="kb-container">
      <h2 className="kb-heading">Key Business Benefits</h2>
      <p className="kb-subheading">
        By partnering with Next-Gen IT Infrastructure Solutions, you gain:
      </p>

      <div className="kb-row">
        <div className="kb-card">
          <Clock className="kb-icon" size={40} />
          <h3 className="kb-title">99.99% Uptime</h3>
          <p className="kb-desc">
            Enterprise-grade availability ensuring your business stays operational around the clock.
          </p>
          <div className="kb-underline" />
        </div>

        <div className="kb-card">
          <ShieldCheck className="kb-icon" size={40} />
          <h3 className="kb-title">Cybersecurity Ready</h3>
          <p className="kb-desc">
            Integrated threat protection to safeguard your valuable business data and systems.
          </p>
          <div className="kb-underline" />
        </div>

        <div className="kb-card">
          <Layout className="kb-icon" size={40} />
          <h3 className="kb-title">Tailored Architecture</h3>
          <p className="kb-desc">
            Custom solutions based on your workload, compliance requirements & scale needs.
          </p>
          <div className="kb-underline" />
        </div>

        <div className="kb-card">
          <DollarSign className="kb-icon" size={40} />
          <h3 className="kb-title">Cost Efficiency</h3>
          <p className="kb-desc">
            Right-sized infrastructure with scale models to optimize your IT spending.
          </p>
          <div className="kb-underline" />
        </div>

        <div className="kb-card">
          <UserCheck className="kb-icon" size={40} />
          <h3 className="kb-title">Expert Management</h3>
          <p className="kb-desc">
            Trained engineers, certified by Cisco, VMware, Microsoft & AWS managing your systems.
          </p>
          <div className="kb-underline" />
        </div>
      </div>
    </div>
  );
}

export default KeyBenefits;
