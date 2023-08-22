import { useState, useEffect } from "react";

import "./App.css";

import TopBar from "./components/TopBar/TopBar";
import HeaderDiv from "./components/HeaderDiv/HeaderDiv";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Git from "./components/Git/Git";

function App() {
  const [siteLang, setSiteLang] = useState("english");

  function langHandler(lang) {
    //console.log("language chosen: " + lang);
    if (lang !== siteLang) {
      setSiteLang(lang);
      setHInfo({
        name: "",
        desc: "",
        resume_title: "",
        resume_text: "",
        resume_hint: "",
        port_title: "",
        port_text: "",
        git_title: "",
        git_text: "",
        git_link: "",
      });
      ftch(lang);
    }
  }

  const [hinfo, setHInfo] = useState({
    name: "",
    desc: "",
    resume_title: "",
    resume_text: "",
    resume_hint: "",
    port_title: "",
    port_text: "",
    git_title: "",
    git_text: "",
    git_link: "",
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
          resume_text: data.resume_text,
          resume_hint: data.resume_hint,
          port_title: data.port_title,
          port_text: data.port_text,
          git_title: data.git_title,
          git_text: data.git_text,
          git_link: data.git_link,
        });
      });
  }

  return (
    <div className="App">
      <TopBar onLangChange={langHandler} hinfo={hinfo} />
      <div className="main">
        <HeaderDiv name={hinfo.name} desc={hinfo.desc} lan={siteLang} />
        <Resume
          resume_title={hinfo.resume_title}
          resume_text={hinfo.resume_text}
          resume_hint={hinfo.resume_hint}
          lan={siteLang}
        />
        <Portfolio port_title={hinfo.port_title} port_text={hinfo.port_text} />
        <Git
          git_title={hinfo.git_title}
          git_text={hinfo.git_text}
          git_link={hinfo.git_link}
        />
      </div>
    </div>
  );
}

export default App;
