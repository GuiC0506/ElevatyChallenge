import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";

function DateForm(props) {
  const [formData, setFormData] = useState({
    startDate: "2004-06-05",
    endDate: "2007-06-05",
  });

  function handleChange(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function makeRequest() {
    const peopleResponse = await fetch(
      `https://fakerapi.it/api/v1/persons?_quantity=30&_birthday_start=${formData.startDate}&_birthday_end=${formData.endDate}`
    );

    const peopleData = await peopleResponse.json();
    props.setApiData((prevData) => peopleData.data);
    const creditCardResponse = await fetch(
      "https://fakerapi.it/api/v1/credit_cards?_quantity=1"
    );
    const creditCardData = await creditCardResponse.json();
    props.setCreditCardData((prevData) => creditCardData);
  }

  return (
    <>
      <form className="date-form">
        <label htmlFor="startDate">Start date</label>
        <input
          type="date"
          name="startDate"
          onChange={handleChange}
          value={formData.startDate}
        />
        <label htmlFor="endDate">End date</label>
        <input
          type="date"
          name="endDate"
          onChange={handleChange}
          value={formData.endDate}
        />
        <input type="button" onClick={makeRequest} value="Submit" />
      </form>
    </>
  );
}

export default DateForm;
