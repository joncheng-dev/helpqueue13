import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <h3>{props.names}</h3>
        <p>{props.location}</p>
        <p>
          <em>{props.issue}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  whenTicketClicked: PropTypes.func,
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
};

export default Ticket;
