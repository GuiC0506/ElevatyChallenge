import React from "react";
import PersonCard from "./PersonCard";
import "../App.css";

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
              creditCardData={props.creditCardData.data}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
