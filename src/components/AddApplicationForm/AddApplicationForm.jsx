import { useState } from "react";
import "./AddApplicationForm.css";

const initialFormData = {
  company: "",
  position: "",
  location: "",
  jobType: "",
  status: "Applied",
  dateApplied: "",
  jobUrl: "",
  notes: "",
};

function AddApplicationForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="application-form__field">
        <label htmlFor="company">Company Name *</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="e.g. Google"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="application-form__field">
        <label htmlFor="position">Job Title *</label>
        <input
          id="position"
          name="position"
          type="text"
          placeholder="e.g. Frontend Developer"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </div>

      <div className="application-form__row">
        <div className="application-form__field">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. New York, NY"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="application-form__field">
          <label htmlFor="jobType">Job Type</label>
          <select
            id="jobType"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">Select type</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>
        </div>
      </div>

      <div className="application-form__row">
        <div className="application-form__field">
          <label htmlFor="status">Application Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Applied">Applied</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="application-form__field">
          <label htmlFor="dateApplied">Date Applied</label>
          <input
            id="dateApplied"
            name="dateApplied"
            type="date"
            value={formData.dateApplied}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="application-form__field">
        <label htmlFor="jobUrl">Job Posting URL</label>
        <input
          id="jobUrl"
          name="jobUrl"
          type="url"
          placeholder="https://..."
          value={formData.jobUrl}
          onChange={handleChange}
        />
      </div>

      <div className="application-form__field">
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Add any notes about this application..."
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <div className="application-form__actions">
        <button
          type="button"
          className="application-form__cancel"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button type="submit" className="application-form__submit">
          Add Application
        </button>
      </div>
    </form>
  );
}

export default AddApplicationForm;
