import React from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      mainTicketList: [],
      selected: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selected !== null) {
      this.setState({
        selected: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formShowing: !prevState.formShowing,
      }));
    }
  };

  handleAddingNewTicket = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      formShowing: false,
      mainTicketList: newMainTicketList,
    });
  };

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter((ticket) => ticket.id === id)[0];
    this.setState({
      selected: selectedTicket,
    });
  };

  handleDeletingTicket = () => {
    const newMainTicketList = this.state.mainTicketList.filter((ticket) => ticket.id !== this.state.selected.id);
    this.setState({
      mainTicketList: newMainTicketList,
      selected: null,
    });
  };

  handleEditClick = () => {
    this.setState({
      editing: true,
    });
  };

  handleEditingTicket = (editedTicket) => {
    const newMainTicketList = this.state.mainTicketList.filter((ticket) => ticket.id !== this.state.selected.id).concat(editedTicket);
    this.setState({
      mainTicketList: newMainTicketList,
      selected: null,
      editing: false,
    });
  };

  render() {
    let currentlyDisplayed = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyDisplayed = <EditTicketForm ticket={this.state.selected} onEditTicket={this.handleEditingTicket} />;
      buttonText = "Return to Ticket List";
    } else if (this.state.selected !== null) {
      currentlyDisplayed = <TicketDetail ticket={this.state.selected} onDeleteClick={this.handleDeletingTicket} onEditClick={this.handleEditClick} />;
      buttonText = "Return to Ticket List";
    } else if (this.state.formShowing) {
      currentlyDisplayed = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicket} />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyDisplayed = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      buttonText = "Add New Ticket";
    }

    return (
      <React.Fragment>
        {currentlyDisplayed}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
