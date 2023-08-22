import { useState } from "react";
import "./TopBar.css";

function TopBar(props) {
  const [isActive, setActive] = useState("false");

  const [language, setLanguage] = useState("true");

  function langHandler() {
    if (!language) {
      props.onLangChange("english");
    }else{
      props.onLangChange("portugues");
    }
    setLanguage(!language);
  }

  function menuToggle() {
    setActive(!isActive);
  }

  let menu_items = [
    props.hinfo.resume_title,
    props.hinfo.port_title,
    "Contato",
  ];

  return (
    <div className="top-bar">
      <div className="sand-menu" onClick={menuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="site-name">&lt; Érick Oliveira Dev /&gt;</div>
      <div className="menu">
        <div className="menu-internal">
          {menu_items.map((item) => (
            <div key={Math.random(1000)} className="menu-item">
              <a href="#">
                &lt;{" "}
                {item ? item : <span className="invisible">menu item</span>}{" "}
                /&gt;
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="btn-holder">
        <button
          className={language ? "btn-lang" : "btn-lang change"}
          onClick={langHandler}
        ></button>
      </div>
      <div className={isActive ? "drop-menu" : "drop-menu active"}>
        {menu_items.map((item) => (
          <div key={Math.random(1000)} className="menu-item">
            <a href="#" onClick={menuToggle}>
              &lt; {item ? item : <span className="invisible">menu item</span>}{" "}
              /&gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
