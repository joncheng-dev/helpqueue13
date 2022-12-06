import React from "react";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.onFormSubmission}>
        <p>Names</p>
        <input type="text" name="names" placeholder="Names" />
        <p>Location</p>
        <input type="text" name="location" placeholder="Location" />
        <p>Issue</p>
        <textarea name="issue" placeholder="Describe the issue.." />
        <br />
        <button type="submit">{props.buttonText}</button>
        <hr />
      </form>
    </React.Fragment>
  );
}

export default ReusableForm;
