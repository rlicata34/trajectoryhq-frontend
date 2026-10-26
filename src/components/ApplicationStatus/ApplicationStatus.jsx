import "./ApplicationStatus.css";

function ApplicationStatus({ status }) {
  return (
    <span
      className={`application-status application-status--${status.toLowerCase()}`}
    >
      <span className="application-status__dot" aria-hidden="true" />

      {status}
    </span>
  );
}

export default ApplicationStatus;
