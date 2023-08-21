import { useState } from "react";
import "./TopBar.css";

function TopBar(props) {
  const [isActive, setActive] = useState("false");

  function langHandler(lang) {
    props.onLangChange(lang);
  }

  function menuToggle() {
    //document.getElementsByClassName("drop-menu").classNameList.toggle('active');
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
              <p>
                &lt;{" "}
                {item ? item : <span className="invisible">menu item</span>}{" "}
                /&gt;
              </p>
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
          id="btn-br"
          className="btn-lang-changer"
          onClick={() => langHandler("portugues")}
        ></button>
        <button
          id="btn-us"
          className="btn-lang-changer"
          onClick={() => langHandler("english")}
        ></button>
      </div>
      <div className={isActive ? "drop-menu" : "drop-menu active"}>
        {menu_items.map((item) => (
          <div key={Math.random(1000)} className="menu-item">
            <p>
              &lt; {item ? item : <span className="invisible">menu item</span>}{" "}
              /&gt;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
