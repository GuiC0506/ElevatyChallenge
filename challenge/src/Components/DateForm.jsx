import { useState } from "react";
import "../App.css";

function DateForm({ fetchClientData, setShowWelcomeMessage }) {
  const [dateRange, setDateRange] = useState({
    startDate: "2004-05-06",
    endDate: "2007-05-06",
  });

  function handleChange(event) {
    setDateRange((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowWelcomeMessage(false);
    fetchClientData(dateRange.startDate, dateRange.endDate);
  }

  return (
    <>
      <form className="date-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="startDate">Start date</label>
        <input
          type="date"
          name="startDate"
          onChange={handleChange}
          value={dateRange.startDate}
        />
        <label htmlFor="endDate">End date</label>
        <input
          type="date"
          name="endDate"
          onChange={handleChange}
          value={dateRange.endDate}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default DateForm;
