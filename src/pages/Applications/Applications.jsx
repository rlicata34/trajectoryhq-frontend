import ApplicationsHeader from "../../components/ApplicationsHeader/ApplicationsHeader";
import ApplicationStats from "../../components/ApplicationStats/ApplicationStats";
import ApplicationFilters from "../../components/ApplicationFilters/ApplicationFilters";
import ApplicationsTable from "../../components/ApplicationsTable/ApplicationsTable";

import "./Applications.css";

function Applications() {
  return (
    <div className="applications">
      <ApplicationsHeader />
      <ApplicationStats />
      <section className="applications__content" aria-label="Job applications">
        <ApplicationFilters />
        <ApplicationsTable />
      </section>
    </div>
  );
}

export default Applications;
