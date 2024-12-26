import React, { useState } from "react";
import DateForm from "./DateForm";
import elevatyLogo from "../assets/elevaty_logo.jpg";
import searchIcon from "../assets/search_icon.png";

function Header({
  fetchClientData,
  clientData,
  setShowWelcomeMessage,
  filteredUsers,
  handleInputChange,
  searchItem,
}) {
  const searchBar = (
    <div className="search-section">
      <img className="search-icon" src={searchIcon} alt="search-icon" />
      <input
        className="search-bar"
        type="text"
        placeholder="Search name"
        onChange={handleInputChange}
        value={searchItem}
      />
    </div>
  );

  return (
    <div>
      <header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={elevatyLogo} alt="logo" className="logo" />
          <h1 className="page-title">Search System</h1>
        </div>
        <DateForm
          fetchClientData={fetchClientData}
          setShowWelcomeMessage={setShowWelcomeMessage}
        />
      </header>
      <div className="search-bar-and-nro-people">
        {clientData.length > 0 && searchBar}
        {clientData.length > 0 && (
          <p className="filtered-users">
            Filtered users: {filteredUsers.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
