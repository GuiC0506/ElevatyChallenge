import React, { useState } from "react";
import PersonCard from "./PersonCard";
import "../App.css";

function Main({
  clientData,
  creditCardData,
  companyData,
  productData,
  setFilteredUsers,
  showWelcomeMessage,
  imageUrls,
}) {
  return (
    <main>
      {showWelcomeMessage && (
        <h1 className="welcome-message">You are welcome!</h1>
      )}
      <section className="people-section">
        {clientData.map((person, i) => {
          return (
            <PersonCard
              key={i}
              id={person.id}
              deletionIndex={i}
              person={person}
              clientData={clientData}
              creditCardData={creditCardData}
              companyData={companyData}
              productData={productData}
              setFilteredUsers={setFilteredUsers}
              imageUrl={imageUrls[Math.floor(Math.random() * imageUrls.length)]}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
