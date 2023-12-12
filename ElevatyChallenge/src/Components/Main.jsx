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
  setClientData,
  handleInputChange,
  searchItem,
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
              person={person}
              creditCardData={creditCardData}
              companyData={companyData}
              productData={productData}
              imageUrl={imageUrls[Math.floor(Math.random() * imageUrls.length)]}
              setClientData={setClientData}
              handleInputChange={handleInputChange}
              searchItem={searchItem}
              setFilteredUsers={setFilteredUsers}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
