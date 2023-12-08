import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState([]);

  return (
    <>
      <Header title="Search System" apiData={apiData} setApiData={setApiData} />
      <Main apiData={apiData} setApiData={setApiData} />
    </>
  );
}

export default App;
