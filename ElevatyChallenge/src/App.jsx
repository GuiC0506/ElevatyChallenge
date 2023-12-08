import React, { useState, useRef, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState([]);
  const [creditCardData, setCreditCardData] = useState({});

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=1")
      .then((response) => response.json())
      .then((data) => setCreditCardData(data));
  }, []);

  return (
    <>
      <Header title="Search System" apiData={apiData} setApiData={setApiData} />
      <Main
        apiData={apiData}
        setApiData={setApiData}
        creditCardData={creditCardData}
      />
    </>
  );
}

export default App;
