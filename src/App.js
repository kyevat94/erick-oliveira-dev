import { useState, useEffect } from "react";

import "./App.css";

import TopBar from "./components/TopBar/TopBar";
import HeaderDiv from "./components/HeaderDiv/HeaderDiv";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  const [siteLang, setSiteLang] = useState("english");

  function langHandler(lang) {
    console.log("language chosen: " + lang);
    if (lang !== siteLang) {
      setSiteLang(lang);
      setHInfo({
        name: "",
        desc: "",
        resume_title: "",
        resume: "",
      });
      ftch(lang);
    }
  }

  const [hinfo, setHInfo] = useState({
    name: "",
    desc: "",
    resume_title: "",
    resume: "",
    port_title: "",
    port_text: "",
  });

  useEffect(() => {
    //console.log("App starts");
    ftch(siteLang)
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
          port_title: data.port_title,
          port_text: data.port_text,
        });
      });
  }

  return (
    <div className="App">
      <TopBar onLangChange={langHandler} hinfo={hinfo}/>
      <div className="main">
        <HeaderDiv name={hinfo.name} desc={hinfo.desc} lan={siteLang} />
        <Resume
          resume_title={hinfo.resume_title}
          resume={hinfo.resume}
          lan={siteLang}
        />
        <Portfolio 
          port_title={hinfo.port_title}
          port_text={hinfo.port_text}
        />
      </div>
    </div>
  );
}

export default App;
