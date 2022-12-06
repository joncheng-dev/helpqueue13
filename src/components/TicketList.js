import React from "react";
import Ticket from "./Ticket";

function TicketList(props) {
  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {props.ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
