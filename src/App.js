import { useState, useEffect } from "react";
import "./App.css";

import TopBar from "./components/TopBar/TopBar";
import HeaderDiv from "./components/HeaderDiv/HeaderDiv";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  const [siteLang, setSiteLang] = useState("portugues");

  function langHandler(lang) {
    console.log("language chosen: " + lang);
    if (lang !== siteLang) {
      setSiteLang(lang);
      ftch(lang);
    }
  }

  const [hinfo, setHInfo] = useState({
    name: "",
    desc: "",
    resume_title: "",
    resume: "",
  });

  useEffect(() => {
    //console.log("App starts");
    ftch(siteLang);
  }, []);

  function ftch(lang) {
    fetch("https://erickoliveiradev.pythonanywhere.com/get_main_info/" + lang)
      .then((response) => response.json())
      .then((data) => {
        setHInfo({
          name: data.name,
          desc: data.desc,
          resume_title: data.resume_title,
          resume: data.resume,
        });
      });
  }

  return (
    <div className="App">
      <TopBar onLangChange={langHandler} />
      <div className="main">
        <HeaderDiv name={hinfo.name} desc={hinfo.desc} lan={siteLang} />
        <Resume
          resume={hinfo.resume}
          resume_title={hinfo.resume_title}
          lan={siteLang}
        />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
