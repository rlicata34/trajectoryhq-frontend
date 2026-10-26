import { Plus } from "lucide-react";

import "./ApplicationsHeader.css";

function ApplicationsHeader({ onAddApplication }) {
  return (
    <div className="applications-header">
      <div className="applications-header__info">
        <h1 className="applications-header__title">Applications</h1>
        <p className="applications-header__description">
          Track and manage your job search pipeline.
        </p>
      </div>
      <button
        className="applications-header__button"
        type="button"
        onClick={onAddApplication}
      >
        <Plus size={18} />
        Add Application
      </button>
    </div>
  );
}

export default ApplicationsHeader;
