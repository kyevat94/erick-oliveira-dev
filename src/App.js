import { useState } from "react";
import "./App.css";

import "./components/TopBar/TopBar";
import TopBar from "./components/TopBar/TopBar";

function App() {
  const [boxExplainText, setBoxExplainText] = useState("");

  const [siteLang, setSiteLang] = useState(0); // 0: english, 1: portugues

  var personName = "Érick Oliveira";
  var personDescription = [
    "Front-End Web Developer",
    "Desenvolvedor Web Front-End",
  ];

  function showLangInfo(lang) {
    document.getElementById("box-explain").classList.add("visible");
    if (lang === "html") {
      setBoxExplainText(
        "<p>HTML is the standard markup language for Web pages.</p><p>It defines all the elements that are in the web page</p>"
      );
    }
  }

  function setDefaultLangInfo() {
    document.getElementById("box-explain").classList.remove("visible");
    setBoxExplainText("");
  }

  return (
    <div className="App">
      <TopBar />
      <div className="main">
        <div className="header-div">
          <div className="capa-header-div"></div>
          <div className="foto-main"></div>
          <div className="text-header-div">
            <h1>{personName}</h1>
            <h3>{personDescription[siteLang]}</h3>
          </div>
          <div className="footer-header-div"></div>
        </div>
        <div className="about-me-div">
          <div className="text-about-me-div">
            <p>
              Student of Software Engeneering by Anhanguera University, Math
              teacher by Estácio University, and Front-End developer, with
              knowledge of &nbsp;
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
              , &nbsp;
              <span className="lang-box" id="sql-box">
                SQL
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
