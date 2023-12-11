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
  filteredUsers,
  setNoShowUser,
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
    filteredUsers.length === 0 ? setNoShowUser(true) : setNoShowUser(false);
  }

  const searchBar = (
    <div className="search-section">
      <img className="search-icon" src={searchIcon} alt="search-icon" />
      <input
        className="search-bar"
        type="text"
        placeholder="Search name"
        onChange={handleInputChange}
      />
    </div>
  );

  return (
    <div>
      <header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={elevatyLogo} alt="logo" className="logo" />
          <h1 className="page-title">{title}</h1>
        </div>
        <DateForm
          fetchClientData={fetchClientData}
          setRenderSearchBar={setRenderSearchBar}
        />
      </header>
      {clientData.length > 0 && searchBar}
    </div>
  );
}

export default Header;
