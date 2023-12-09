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

  async function fetchClientData(startDate, endDate) {
    const response = await fetch(
      `https://fakerapi.it/api/v1/persons?_quantity=30&_birthday_start=${startDate}&_birthday_end=${endDate}`
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
      "https://fakerapi.it/api/v1/products?_quantity=10"
    );
    const { data } = await response.json();
    setProductData(data);
  }

  useEffect(() => {
    fetchCreditCardData(), fetchCompanyName(), fetchProductsData();
  }, []);

  return (
    <>
      <Header
        title="Search System"
        fetchClientData={fetchClientData}
        setFilteredUsers={setFilteredUsers}
        clientData={clientData}
        setSearchItem={setSearchItem}
        filteredUsers={filteredUsers}
      />
      <Main
        clientData={filteredUsers}
        setClientData={setClientData}
        companyData={companyData}
        creditCardData={creditCardData}
        productData={productData}
      />
    </>
  );
}

export default App;
