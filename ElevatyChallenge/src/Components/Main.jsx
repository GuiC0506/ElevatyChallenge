import React from "react";
import PersonCard from "./PersonCard";
import "../App.css";

function Main({
  clientData,
  setClientData,
  creditCardData,
  companyData,
  productData,
  filteredUsers,
}) {
  // console.log(filteredUsers);
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
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
