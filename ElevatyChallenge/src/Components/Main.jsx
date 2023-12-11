import React, { useState } from "react";
import PersonCard from "./PersonCard";
import "../App.css";

function Main({
  clientData,
  setClientData,
  creditCardData,
  companyData,
  productData,
  setFilteredUsers,
  filteredUsers,
  showNoUser,
}) {
  const noUsers = <h1>No user</h1>;
  return (
    <main>
      <section className="people-section">
        {clientData.map((person) => {
          return (
            <PersonCard
              key={person.id}
              id={person.id}
              person={person}
              clientData={clientData}
              setClientData={setClientData}
              creditCardData={creditCardData}
              companyData={companyData}
              productData={productData}
              setFilteredUsers={setFilteredUsers}
            />
          );
        })}
        {showNoUser && noUsers}
      </section>
    </main>
  );
}

export default Main;
