import React, { useState } from "react";
import "./search-bar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchCard }) => {
  const [value, setValue] = useState("");

  return (
    <div className="container search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchCard(value.trim());
          setValue("");
        }}
        className="input-wrap"
      >
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="Search user by name...."
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
