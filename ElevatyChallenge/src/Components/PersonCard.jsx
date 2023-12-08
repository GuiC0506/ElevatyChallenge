import React from "react";
import { useState } from "react";
import "../App.css";

function PersonCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  function handleShowDetailsStatus() {
    setShowDetails((prevStatus) => !prevStatus);
    console.log(props.apiData);
  }

  function DropUser() {
    const updatedPeopleData = props.apiData.filter((person) => {
      return person.id != props.id;
    });
    props.setApiData(updatedPeopleData);
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
      </div>
    </div>
  );

  return (
    <div className="person-card" id={`person-${props.id}`}>
      <section className="main-info">
        <h2>{fullname}</h2>
        <div className="card-interactions">
          <button className="show-details" onClick={handleShowDetailsStatus}>
            See details
          </button>
          <button className="drop-user-warning" onClick={DropUser}>
            Drop user
          </button>
        </div>
      </section>
      {showDetails && details}
    </div>
  );
}

export default PersonCard;
