import { ChevronLeft, ChevronRight } from "lucide-react";
import ApplicationRow from "../ApplicationRow/ApplicationRow";

import "./ApplicationsTable.css";

function ApplicationsTable({ applications = [] }) {
  return (
    <div className="applications-table">
      <table className="applications-table__table">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" aria-label="Select all applications" />
            </th>

            <th scope="col">Company</th>
            <th scope="col">Position</th>
            <th scope="col">Status</th>
            <th scope="col">Date Applied</th>
            <th scope="col">Location</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((application) => (
            <ApplicationRow key={application.id} application={application} />
          ))}
        </tbody>
      </table>

      <div className="applications-table__footer">
        <p>Showing {applications.length} applications</p>

        <nav
          className="applications-table__pagination"
          aria-label="Application pages"
        >
          <button type="button" aria-label="Previous page">
            <ChevronLeft size={16} />
          </button>

          <button type="button" aria-label="Page 1" aria-current="page">
            1
          </button>

          <button type="button" aria-label="Page 2">
            2
          </button>

          <button type="button" aria-label="Page 3">
            3
          </button>

          <button type="button" aria-label="Next page">
            <ChevronRight size={16} />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default ApplicationsTable;
