import React from "react";
import DateForm from "./DateForm";

function Header({ title, fetchClientData }) {
  return (
    <header>
      <h1 className="page-title">{title}</h1>
      <DateForm fetchClientData={fetchClientData} />
    </header>
  );
}

export default Header;
