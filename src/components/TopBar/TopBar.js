import { useState } from "react";
import "./TopBar.css";

function TopBar(props) {
  const [searchTxt, setSearchTxt] = useState("Search");

  const searchOnFocus = (focusState) => {
    setSearchTxt(focusState);
  };

  function langHandler(lang) {
    props.onLangChange(lang);
  }

  return (
    <div className="top-bar">
      <div className="search-div">
        <input
          type="text"
          placeholder={searchTxt}
          className="search-top"
          onFocus={() => searchOnFocus("")}
          onBlur={() => searchOnFocus("Search")}
        ></input>
      </div>
      <div className="btn-holder">
        <button id="btn-br" className="btn-lang-changer" onClick={() => langHandler("portugues")}></button>
        <button id="btn-us" className="btn-lang-changer" onClick={() => langHandler("english")}></button>
      </div>
    </div>
  );
}

export default TopBar;
