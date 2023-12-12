import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";

function App() {
  const [clientData, setClientData] = useState([]);
  const [creditCardData, setCreditCardData] = useState({});
  const [companyData, setCompanyData] = useState({});
  const [productData, setProductData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [imageUrls, setImageURLs] = useState([]);

  function handleInputChange(event) {
    const itemSearched = event.target.value;
    setSearchItem(itemSearched);
    if (itemSearched === "") {
      setFilteredUsers(clientData);
    } else {
      const filteredItems = clientData.filter((client) => {
        const fullname = client.firstname + " " + client.lastname;
        return fullname.toLowerCase().includes(itemSearched.toLowerCase());
      });
      setFilteredUsers(filteredItems);
    }
  }

  async function fetchClientData(startDate, endDate) {
    const response = await fetch(
      `https://fakerapi.it/api/v1/persons?_quantity=50&_birthday_start=${startDate}&_birthday_end=${endDate}`
    );
    const { data } = await response.json();
    sortClientsAlphabetically(data);
    setClientData(data);
    setFilteredUsers(data);
  }

  function sortClientsAlphabetically(array) {
    array.sort(function (a, b) {
      if (a.firstname < b.firstname) {
        return -1;
      }
      if (a.firstname > b.firstname) {
        return 1;
      }
      return 0;
    });
  }

  async function fetchCreditCardData() {
    const response = await fetch(
      "https://fakerapi.it/api/v1/credit_cards?_quantity=1"
    );
    const { data } = await response.json();
    setCreditCardData(data[0]);
  }

  async function fetchCompanyName() {
    const response = await fetch(
      "https://fakerapi.it/api/v1/companies?_quantity=1"
    );

    const { data } = await response.json();
    setCompanyData(data[0]);
  }

  async function fetchProductsData() {
    const response = await fetch(
      "https://fakerapi.it/api/v1/products?_quantity=8&_price_min=1&_price_max=100&_taxes=20"
    );
    const { data } = await response.json();
    setProductData(data);
  }

  async function fetchImagesData() {
    const response = await fetch(
      "https://fakerapi.it/api/v1/images?_quantity=10&_type=kittens&"
    );
    const { data } = await response.json();
    const urls = data.map((image) => image.url);
    setImageURLs(urls);
  }

  useEffect(() => {
    fetchCreditCardData(),
      fetchCompanyName(),
      fetchProductsData(),
      fetchImagesData(),
      setShowWelcomeMessage(true);
  }, []);

  return (
    <>
      <Header
        fetchClientData={fetchClientData}
        clientData={clientData}
        setShowWelcomeMessage={setShowWelcomeMessage}
        filteredUsers={filteredUsers}
        handleInputChange={handleInputChange}
        searchItem={searchItem}
      />
      <Main
        clientData={filteredUsers}
        companyData={companyData}
        creditCardData={creditCardData}
        productData={productData}
        setFilteredUsers={setFilteredUsers}
        showWelcomeMessage={showWelcomeMessage}
        imageUrls={imageUrls}
        setClientData={setClientData}
        handleInputChange={handleInputChange}
        searchItem={searchItem}
      />
    </>
  );
}

export default App;
