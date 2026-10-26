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

        <div className="applications-table__pagination">
          <button type="button">Previous</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">Next</button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationsTable;
