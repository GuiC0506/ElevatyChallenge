import React from "react";
import { useState } from "react";
import PDFFile from "./InvoicePDF";
import { BlobProvider } from "@react-pdf/renderer";
import "../App.css";

function PersonCard({
  id,
  person,
  clientData,
  creditCardData,
  companyData,
  productData,
  setFilteredUsers,
  imageUrl,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [deleteUserConfirmation, setDeleteUserConfirmation] = useState(false);

  function handleShowDetailsStatus() {
    setShowDetails((prevStatus) => !prevStatus);
  }

  function handleCloseCardDetails(event) {
    if (event.key == "Escape") setShowDetails(false);
  }

  if (showDetails) {
    document.addEventListener("keydown", handleCloseCardDetails);
  } else {
    document.removeEventListener("keydown", handleCloseCardDetails);
  }

  function deleteUser(event) {
    const updatedPeopleData = clientData.filter((person) => {
      return person.id != id;
    });

    setFilteredUsers(updatedPeopleData);
    setDeleteUserConfirmation((prevStatus) => !prevStatus);
    // if (showDetails) handleShowDetailsStatus();
  }
  const bornAt = new Date(person.birthday).toLocaleDateString("en-US");

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
          <strong>Birth Date:</strong> {bornAt}
        </p>
        <p>
          <strong>Phone:</strong> {person.phone}
        </p>
        <p>
          <strong>Address:</strong>
          {street}, {city} - {country}
        </p>
        <p>
          <strong>Credit Card:</strong> {creditCardData.type}
        </p>
        <BlobProvider
          document={
            <PDFFile
              person={person}
              company={companyData.name}
              productData={productData}
              imageUrl={imageUrl}
            />
          }
        >
          {({ blob, url, loading, error }) => {
            if (loading) return "Loading document...";
            else
              return (
                <a href={url} target="_blank" className="pdf-link">
                  Invoice PDF
                </a>
              );
          }}
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
              {fullname},<span className="bord-at"> born at {bornAt}</span>
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
