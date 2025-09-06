import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Search.css";
import SearchIcon from "../assets/search-icon.svg"; // make sure this is inside src/assets

function Search({ searchData, placeholder }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0 && searchData) {
      const filtered = searchData.filter((album) =>
        album.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (album) => {
    setQuery(album.title);
    setSuggestions([]);
    navigate(`/album/${album.slug}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) handleSelect(suggestions[0]);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className="search-button">
          <img src={SearchIcon} alt="Search" />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((album) => (
            <li
              key={album.slug}
              className="suggestion-item"
              onClick={() => handleSelect(album)}
            >
              <p className="albumTitle">{album.title}</p>
              {/* Add artist line if needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
