import { MapPin, Ellipsis } from "lucide-react";

import ApplicationStatus from "../ApplicationStatus/ApplicationStatus";
import "./ApplicationRow.css";

function ApplicationRow({ application }) {
  const {
    id,
    company,
    logo,
    position,
    status,
    dateApplied,
    location,
    workType,
  } = application;

  return (
    <tr className="application-row">
      {/* Checkbox */}
      <td>
        <input type="checkbox" aria-label={`Select ${company} application`} />
      </td>

      {/* Company */}
      <td>
        <div className="application-row__company">
          <img src={logo} alt="" className="application-row__logo" />

          <span className="application-row__company-name">{company}</span>
        </div>
      </td>

      {/* Position */}
      <td className="application-row__position">{position}</td>

      {/* Status */}
      <td>
        <ApplicationStatus status={status} />
      </td>

      {/* Date Applied */}
      <td className="application-row__date">{dateApplied}</td>

      {/* Location */}
      <td>
        <div className="application-row__location">
          <MapPin size={16} />

          <span>{location}</span>
        </div>
      </td>

      {/* Work Type */}
      <td>
        <span className="application-row__work-type">{workType}</span>
      </td>

      {/* Actions */}
      <td>
        <button
          type="button"
          className="application-row__actions"
          aria-label={`More actions for ${company}`}
        >
          <Ellipsis size={18} />
        </button>
      </td>
    </tr>
  );
}

export default ApplicationRow;
