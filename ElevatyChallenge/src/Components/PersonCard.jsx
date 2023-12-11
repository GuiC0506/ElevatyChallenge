import React from "react";
import { useState } from "react";
import PDFFile from "./InvoicePDF";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";
import "../App.css";

function PersonCard({
  id,
  person,
  clientData,
  creditCardData,
  companyData,
  productData,
  setFilteredUsers,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [deleteUserConfirmation, setDeleteUserConfirmation] = useState(false);

  function handleShowDetailsStatus() {
    setShowDetails((prevStatus) => !prevStatus);
    console.log("clicado");
  }

  function deleteUser(event) {
    const updatedPeopleData = clientData.filter((person) => {
      return person.id != id;
    });

    setFilteredUsers(updatedPeopleData);
    setDeleteUserConfirmation((prevStatus) => !prevStatus);
    if (showDetails) handleShowDetailsStatus();
  }

  const fullname = person.firstname + " " + person.lastname;
  const { street, city, country } = person.address;
  const details = (
    <div className="details">
      <span className="section-separation"></span>
      <div className="details">
        <p>
          <strong>Id:</strong> {person.id}
        </p>
        <p>
          <strong>Fullname:</strong>
          {fullname}
        </p>
        <p>
          <strong>Email:</strong> {person.email}
        </p>
        <p>
          <strong>Birth Date:</strong> {person.birthday}
        </p>
        <p>
          <strong>Phone:</strong> {person.phone}
        </p>
        <p>
          <strong>Address:</strong>
          {street}, {city} - {country}2222
        </p>
        <p>
          <strong>Credit Card:</strong> {creditCardData.type}
        </p>
        <BlobProvider
          fileName={"TEST"}
          document={
            <PDFFile
              person={person}
              company={companyData.name}
              productData={productData}
            />
          }
        >
          {({ url }) => (
            <a href={url} target="_blank" className="pdf-link">
              Visualize PDF
            </a>
          )}
        </BlobProvider>
      </div>
    </div>
  );

  const userDeletion = (
    <div className="user-deletion">
      <p style={{ fontWeight: "bold" }}>
        Delete the user <span className="user-top-delete">"{fullname}"</span> ?
      </p>
      <div className="deletion-options">
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
    </div>
  );

  return (
    <div className="person-card">
      <div className="person-card-inner" id={id}>
        <div className="front">
          <section className="main-info">
            <h2 className="fullname" onClick={handleShowDetailsStatus}>
              {fullname}
            </h2>
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
