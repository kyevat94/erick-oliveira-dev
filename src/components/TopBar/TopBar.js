import { useState } from "react";
import "./TopBar.css";

function TopBar(props) {
  const [searchTxt, setSearchTxt] = useState("Search");

  const searchOnFocus = (focusState) => {
    setSearchTxt(focusState)
  };

  return (
    <div className="top-bar">
      <input
        type="text"
        placeholder={searchTxt}
        className="search-top"
        onFocus={() => searchOnFocus("")}
        onBlur={() => searchOnFocus("Search")}
      ></input>
    </div>
  );
}

export default TopBar;
