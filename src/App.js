import { useState, useEffect } from "react";
import "./App.css";

import "./components/TopBar/TopBar";
import TopBar from "./components/TopBar/TopBar";
import HeaderDiv from "./components/HeaderDiv/HeaderDiv";

function App() {
  const [boxExplainText, setBoxExplainText] = useState("");

  const [siteLang, setSiteLang] = useState("portugues");

  function langHandler(lang) {
    console.log("language choosed: " + lang);
    if (lang !== siteLang) {
      setSiteLang(lang);
      ftch(lang);
    }
  }

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

  const [hinfo, setHInfo] = useState({ name: "", desc: "" });

  useEffect(() => {
    console.log("Page Starts!");
    ftch(siteLang);
  }, []);

  function ftch(lang) {
    fetch("https://erickoliveiradev.pythonanywhere.com/get_data/" + lang)
      .then((response) => response.json())
      .then((data) => {
        setHInfo({ name: data.name, desc: data.desc, resume: data.resume });
        console.log(data);
      });
  }

  return (
    <div className="App">
      <TopBar onLangChange={langHandler} />
      <div className="main">
        <HeaderDiv name={hinfo.name} desc={hinfo.desc} lan={siteLang} />

        <div className="about-me-div">
          <div className="text-about-me-div">
            <p>
              {hinfo.resume}
              <table>
                <tr>
                  <th className="lang-box">HTML</th>
                  <th className="lang-box">CSS</th>
                </tr>
              </table>
              &nbsp;
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
