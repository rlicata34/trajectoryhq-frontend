import { useState } from "react";

import ApplicationsHeader from "../../components/ApplicationsHeader/ApplicationsHeader";
import ApplicationStats from "../../components/ApplicationStats/ApplicationStats";
import ApplicationFilters from "../../components/ApplicationFilters/ApplicationFilters";
import ApplicationsTable from "../../components/ApplicationsTable/ApplicationsTable";
import Modal from "../../components/Modal/Modal";

import { mockApplications } from "../../utils/mockApplications";

import "./Applications.css";
import AddApplicationForm from "../../components/AddApplicationForm/AddApplicationForm";

function Applications() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleAddApplication(applicationData) {
    console.log("New Application:", applicationData);

    // Eventually, this will save the application.
    closeModal();
  }

  return (
    <div className="applications">
      <ApplicationsHeader onAddApplication={openModal} />
      <ApplicationStats />
      <section className="applications__content" aria-label="Job applications">
        <ApplicationFilters />
        <ApplicationsTable applications={mockApplications} />
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Add Application">
        <AddApplicationForm
          onSubmit={handleAddApplication}
          onCancel={closeModal}
        />
      </Modal>
    </div>
  );
}

export default Applications;
