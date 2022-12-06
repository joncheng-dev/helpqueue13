import React from "react";
import ReusableForm from "./ReusableForm";

function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();

    props.onEditTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: ticket.id,
    });
  }

  return (
    <React.Fragment>
      <h2>Edit Ticket</h2>
      <hr />
      <ReusableForm onFormSubmission={handleEditTicketFormSubmission} buttonText="Update Ticket" />
    </React.Fragment>
  );
}

export default EditTicketForm;
