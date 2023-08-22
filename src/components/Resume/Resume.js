import { useState, useEffect } from "react";
import "./Resume.css";

function Resume(props) {
  const [boxExplainText, setBoxExplainText] = useState("");

  const [linfo, setLInfo] = useState([{ name: "", desc: "" }]);

  const [showLang, setShowLang] = useState(false);

  const lipsum =
    "Sed consequat ligula ac enim hendrerit, in commodo augue facilisis. Donec varius efficitur enim, in ultrices dui pellentesque eget. Maecenas tempor ante eget luctus facilisis.";

  const lipsum2 =
    "Sed consequat ligula ac enim hendrerit, in commodo augue facilisis.";

  function showLangInfo(lang) {
    setShowLang(true);
    document.getElementById("box-explain").classList.add("visible");
    for (let i = 0; i < linfo.length; i++) {
      if (linfo[i].name === lang) {
        setBoxExplainText(linfo[i].desc);
      }
    }
  }

  function setDefaultLangInfo() {
    setShowLang(false);
    document.getElementById("box-explain").classList.remove("visible");
  }

  useEffect(() => {
    //console.log("Resume starts");
    ftch();
    setDefaultLangInfo();
  }, []);

  useEffect(() => {
    setLInfo([{ name: "", desc: "" }]);
    ftch();
    setDefaultLangInfo();
  }, [props.lan]);

  function ftch() {
    fetch(
      "https://erickoliveiradev.pythonanywhere.com/get_dev_langs/" + props.lan
    )
      .then((response) => response.json())
      .then((data) => {
        let arr = [];
        for (let d = 0; d < data.length; d++) {
          arr.push({ name: data[d][0], desc: data[d][1] });
        }
        setLInfo(arr);
      });
  }

  return (
    <div className="about-me-div">
      <div className="text-about-me-div">
        <h1 className="h1-1">
          {props.resume_title ? (
            props.resume_title
          ) : (
            <span className="invisible">Title here</span>
          )}
        </h1>
        <p>
          {props.resume_text ? (
            props.resume_text
          ) : (
            <span className="invisible-p">{lipsum}</span>
          )}
        </p>
        <div className="languages">
          {linfo.map((lang) => (
            <div
              key={lang.name}
              className="lang-box"
              onMouseOver={() => showLangInfo(lang.name)}
              onMouseOut={setDefaultLangInfo}
            >
              {lang.name ? (
                lang.name
              ) : (
                <span className="invisible">Programming Language</span>
              )}
            </div>
          ))}
        </div>

        <hr />

        <div id="box-explain" className="box-default">
          {showLang ? (
            boxExplainText
          ) : props.resume_hint ? (
            props.resume_hint
          ) : (
            <span className="invisible-p">{lipsum2}</span>
          )}
          {showLang}
        </div>
      </div>
      <div className="footer-header-div"></div>
    </div>
  );
}

export default Resume;
