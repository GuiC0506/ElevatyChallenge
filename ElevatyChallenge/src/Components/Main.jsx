import React from "react";
import DateForm from "./DateForm";
import { useState } from "react";
import PersonCard from "./PersonCard";

function Main(props) {
  // use state para os elementos
  return (
    <main>
      <section className="people-section">
        {props.apiData.map((person) => {
          return (
            <PersonCard
              id={person.id}
              person={person}
              apiData={props.apiData}
              setApiData={props.setApiData}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
