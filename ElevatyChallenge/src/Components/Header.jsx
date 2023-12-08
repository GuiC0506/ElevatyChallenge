import React from "react";
import DateForm from "./DateForm";

function Header(props) {
  return (
    <header>
      <h1 className="page-title">{props.title}</h1>
      <DateForm
        apiData={props.apiData}
        setApiData={props.setApiData}
        setCreditCardData={props.setCreditCardData}
        creditCardData={props.creditCardData}
        setStartRequest={props.setStartRequest}
      />
    </header>
  );
}

export default Header;
