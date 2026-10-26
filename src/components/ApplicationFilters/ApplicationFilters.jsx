import { Search, List, Columns2 } from "lucide-react";

import "./ApplicationFilters.css";

function ApplicationFilters() {
  return (
    <div className="application-filters">
      <div className="application-filters__search">
        <Search size={18} />

        <input
          type="search"
          placeholder="Search by company or position..."
          aria-label="Search applications"
        />
      </div>

      <div className="application-filters__field">
        <label htmlFor="application-status">Status</label>

        <select id="application-status" defaultValue="all">
          <option value="all">All Statuses</option>
          <option value="saved">Saved</option>
          <option value="applied">Applied</option>
          <option value="response">Response</option>
          <option value="interviewing">Interviewing</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="application-filters__field">
        <label htmlFor="application-sort">Sort by</label>

        <select id="application-sort" defaultValue="newest">
          <option value="newest">Date Applied (Newest)</option>
          <option value="oldest">Date Applied (Oldest)</option>
          <option value="company">Company Name</option>
        </select>
      </div>

      <div className="application-filters__views">
        <button
          type="button"
          className="application-filters__view application-filters__view--active"
          aria-pressed="true"
        >
          <List size={18} />
          Table
        </button>

        <button
          type="button"
          className="application-filters__view"
          aria-pressed="false"
        >
          <Columns2 size={18} />
          Board
        </button>
      </div>
    </div>
  );
}

export default ApplicationFilters;
