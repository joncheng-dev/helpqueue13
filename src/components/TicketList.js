import React from "react";
import Ticket from "./Ticket";

function TicketList() {
  const ticketList = [
    {
      names: "Homer and Bart",
      location: "Quik-e-Mart",
      issue: "out of beer",
    },
    {
      names: "Marge and Lisa",
      location: "Springfield Public Library",
      issue: "can't find overdue book",
    },
    {
      names: "Patty and Selma",
      location: "Moe's Tavern",
      issue: "out of smokes",
    },
  ];
  return (
    <React.Fragment>
      <h2>Ticket List</h2>
      <hr />
      {ticketList.map((ticket) => (
        <Ticket names={ticket.names} location={ticket.location} issue={ticket.issue} />
      ))}
    </React.Fragment>
  );
}

export default TicketList;
