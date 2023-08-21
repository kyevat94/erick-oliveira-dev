import { useState, useEffect } from "react";
import "./Resume.css";

function Resume(props) {
  const [boxExplainText, setBoxExplainText] = useState("");

  const [linfo, setLInfo] = useState([{ name: "", desc: "" }]);

  const limpsum =
    "Sed consequat ligula ac enim hendrerit, in commodo augue facilisis. Donec varius efficitur enim, in ultrices dui pellentesque eget. Maecenas tempor ante eget luctus facilisis.";

  function showLangInfo(lang) {
    document.getElementById("box-explain").classList.add("visible");
    for (let i = 0; i < linfo.length; i++) {
      if (linfo[i].name === lang) {
        setBoxExplainText("<p>" + linfo[i].desc + "</p>");
      }
    }
  }

  function setDefaultLangInfo() {
    document.getElementById("box-explain").classList.remove("visible");
    if (props.lan === "portugues") {
      setBoxExplainText(
        "Passe o mouse / clique em alguma linguagem para saber mais sobre ela"
      );
    } else if (props.lan === "english") {
      setBoxExplainText(
        "Hover mouse / click some language to know more about it"
      );
    }
  }

  useEffect(() => {
    //console.log("Resume starts");
    ftch(props.lan);
    setDefaultLangInfo();
  }, []);

  useEffect(() => {
    setLInfo([{ name: "", desc: "" }]);
    ftch(props.lan);
    setDefaultLangInfo();
  }, [props.lan]);

  function ftch(lang) {
    fetch("https://erickoliveiradev.pythonanywhere.com/get_dev_langs/" + props.lan)
      .then((response) => response.json())
      .then((data) => {
        let arr = []; //Array.from(linfo);
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
          {props.resume ? (
            props.resume
          ) : (
            <span className="invisible-p">{limpsum}</span>
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
        <div
          id="box-explain"
          className="box-default"
          dangerouslySetInnerHTML={{ __html: boxExplainText }}
        ></div>
      </div>
      <div className="footer-header-div"></div>
    </div>
  );
}

export default Resume;
