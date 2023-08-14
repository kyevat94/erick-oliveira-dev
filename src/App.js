import { useState } from "react";
import "./App.css";

function App() {
  const [searchTxt, setSearchTxt] = useState("Search");

  const [boxExplainText, setBoxExplainText] = useState(
    "Hover/click the languages names to know more about them."
  );

  const searchOnFocus = (focusState) => {
    setSearchTxt(focusState);
  };

  function showLangInfo(lang) {
    if (lang === "html") {
      setBoxExplainText("html<hr/>");
    }
  }

  function setDefaultLangInfo() {
    setBoxExplainText(
      "Hover/click the languages names to know more about them."
    );
  }

  return (
    <div className="App">
      <div className="top-bar">
        <input
          type="text"
          placeholder={searchTxt}
          className="search-top"
          onFocus={() => searchOnFocus("")}
          onBlur={() => searchOnFocus("Search")}
        ></input>
      </div>
      <div className="main">
        <div className="header-div">
          <div className="capa-header-div"></div>
          <div className="foto-main"></div>
          <div className="text-header-div">
            <h1>Érick Oliveira</h1>
            <h3>Full-Stack Web Developer</h3>
          </div>
          <div className="footer-header-div"></div>
        </div>
        <div className="about-me-div">
          <div className="text-about-me-div">
            <p>
              Student of Software Engeneering by Anhanguera College, Math
              teacher, and Full-stack developer, with knowledge of &nbsp;
              <span
                className="lang-box"
                id="html-box"
                onMouseOver={() => showLangInfo("html")}
                onMouseOut={setDefaultLangInfo}
              >
                HTML
              </span>
              , &nbsp;
              <span className="lang-box" id="css-box">
                CSS
              </span>
              , &nbsp;
              <span className="lang-box" id="js-box">
                JavaScript
              </span>
              , &nbsp;
              <span className="lang-box" id="ts-box">
                TypeScript
              </span>
              , &nbsp;
              <span className="lang-box" id="react-box">
                React
              </span>
              , and &nbsp;
              <span className="lang-box" id="py-box">
                Python
              </span>
              .
            </p>
            <hr />
            <div
              id="box-explain"
              className="box-default"
              dangerouslySetInnerHTML={{ __html: boxExplainText }}
            ></div>
          </div>
          <div className="footer-header-div"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
