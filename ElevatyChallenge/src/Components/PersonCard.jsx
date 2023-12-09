import React from "react";
import { useState } from "react";
import PDFFile from "./InvoicePDF";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";
import "../App.css";

function PersonCard({
  id,
  person,
  clientData,
  setClientData,
  creditCardData,
  companyData,
  productData,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [deleteUserConfirmation, setDeleteUserConfirmation] = useState(false);

  function handleShowDetailsStatus() {
    setShowDetails((prevStatus) => !prevStatus);
  }

  function deleteUser() {
    const updatedPeopleData = clientData.filter((person) => {
      return person.id != id;
    });

    setClientData(updatedPeopleData);
    setDeleteUserConfirmation((prevStatus) => !prevStatus);
    if (showDetails) handleShowDetailsStatus();
  }

  const fullname = person.firstname + " " + person.lastname;
  const { street, city, country } = person.address;
  const details = (
    <div className="details">
      <span className="section-separation"></span>
      <div className="details">
        <p>Id: {person.id}</p>
        <p>Fullname: {fullname}</p>
        <p>Email: {person.email}</p>
        <p>Birth Date: {person.birthday}</p>
        <p>Phone: {person.phone}</p>
        <p>
          Address: {street}, {city} - {country}2222
        </p>
        <p>Credit Card: {creditCardData.type}</p>
        <BlobProvider
          document={
            <PDFFile
              person={person}
              company={companyData.name}
              productData={productData}
            />
          }
        >
          {({ url }) => (
            <a href={url} target="_blank">
              Visualize PDF
            </a>
          )}
        </BlobProvider>
      </div>
    </div>
  );

  const userDeletion = (
    <div className="user-deletion">
      <p style={{ fontWeight: "bold" }}>Do you really want do delete it?</p>
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
            <h2 className="fullname">{fullname}</h2>
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
