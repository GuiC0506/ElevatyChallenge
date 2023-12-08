import React from "react";
import { useState } from "react";
import "../App.css";

function PersonCard(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [deleteUserConfirmation, setDeleteUserConfirmation] = useState(false);

  function handleShowDetailsStatus() {
    setShowDetails((prevStatus) => !prevStatus);
  }

  function deleteUser() {
    const updatedPeopleData = props.apiData.filter((person) => {
      return person.id != props.id;
    });
    props.setApiData(updatedPeopleData);
    setDeleteUserConfirmation((prevStatus) => !prevStatus);
    if (showDetails) handleShowDetailsStatus();
  }

  const fullname = props.person.firstname + " " + props.person.lastname;

  const details = (
    <div className="details">
      <span className="section-separation"></span>
      <div className="details">
        <p>Id: {props.id}</p>
        <p>Fullname: {fullname}</p>
        <p>Email: {props.person.email}</p>
        <p>Birth Date: {props.person.birthday}</p>
        <p>Credit Card: {props.creditCardData[0].type}</p>
      </div>
    </div>
  );

  const userDeletion = (
    <div className="user-deletion">
      <button onClick={deleteUser} className="delete-warning">
        Delete
      </button>
      <button
        className="delete-cancel"
        onClick={() => setDeleteUserConfirmation((prevStatus) => !prevStatus)}
      >
        Cancel
      </button>
    </div>
  );

  return (
    <div className="person-card">
      <div className="person-card-inner" id={`person-${props.id}`}>
        <div className="front">
          <section className="main-info">
            <h2>{fullname}</h2>
            <div className="card-interactions">
              <button
                className="show-details"
                onClick={handleShowDetailsStatus}
              >
                {showDetails ? "Hide details" : "Show details"}
              </button>
              <button
                className="drop-user-warning"
                onClick={() =>
                  setDeleteUserConfirmation((prevStatus) => !prevStatus)
                }
              >
                Drop user
              </button>
            </div>
          </section>
          {showDetails && details}
        </div>
        <div className="back">{deleteUserConfirmation && userDeletion}</div>
      </div>
    </div>
  );
}

export default PersonCard;
