import React from "react";
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

  function makeRequest() {
    fetch(
      `https://fakerapi.it/api/v1/persons?_birthday_start=${formData.startDate}&_birthday_end=${formData.endDate}`
    )
      .then((response) => response.json())
      .then((data) => props.setApiData(data.data));
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
