import React, { useState } from "react";
import DateForm from "./DateForm";
import elevatyLogo from "../assets/elevaty_logo.jpg";
import searchIcon from "../assets/search_icon.png";

function Header({
  title,
  fetchClientData,
  setFilteredUsers,
  clientData,
  setSearchItem,
}) {
  const [renderSearchBar, setRenderSearchBar] = useState(false);
  function handleInputChange(event) {
    const itemSearched = event.target.value;
    setSearchItem(itemSearched);

    const filteredItems = clientData.filter((client) => {
      const fullname = client.firstname + " " + client.lastname;
      return fullname.toLowerCase().includes(itemSearched.toLowerCase());
    });
    setFilteredUsers(filteredItems);
  }

  const searchBar = (
    <div className="search-section">
      <img className="search-icon" src={searchIcon} alt="search-icon" />
      <input
        className="search-bar"
        type="text"
        placeholder="ex. Joe"
        onChange={handleInputChange}
      />
    </div>
  );

  return (
    <header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={elevatyLogo} alt="logo" className="logo" />
        <h1 className="page-title">{title}</h1>
        {renderSearchBar && searchBar}
      </div>
      <DateForm
        fetchClientData={fetchClientData}
        setRenderSearchBar={setRenderSearchBar}
      />
    </header>
  );
}

export default Header;
