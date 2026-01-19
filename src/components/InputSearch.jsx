import React, { useState } from "react";

const InputSearch = ({ setSearchLocation }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchLocation(inputValue);
      setInputValue(""); // Limpiar el input
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-100">
      <div className="input-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search location (e.g., Earth, Citadel...)"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="btn btn-primary btn-lg" type="submit">
          <i className="bi bi-search me-2"></i>
          Search
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
