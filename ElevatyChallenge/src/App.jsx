import React, { useState, useRef, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState([]);
  const [startRequest, setStartRequest] = useState(false);
  const [creditCardData, setCreditCardData] = useState({});

  useEffect(() => {
    if (startRequest) {
      fetch(
        `https://fakerapi.it/api/v1/persons?_quantity=30&_birthday_start=2004-06-05&_birthday_end=2007-06-05`
      )
        .then((response) => response.json())
        .then((data) => setApiData(data.data));

      fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=1")
        .then((response) => response.json())
        .then((data) => setCreditCardData(data));
      setStartRequest((prevStatus) => !prevStatus);
    }
  }, [startRequest]);

  return (
    <>
      <Header
        title="Search System"
        apiData={apiData}
        setApiData={setApiData}
        setStartRequest={setStartRequest}
      />
      <Main
        apiData={apiData}
        setApiData={setApiData}
        creditCardData={creditCardData}
      />
    </>
  );
}

export default App;
