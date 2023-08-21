import "./TopBar.css";

function TopBar(props) {
  function langHandler(lang) {
    props.onLangChange(lang);
  }

  return (
    <div className="top-bar">
      <div className="menu"></div>
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
    </div>
  );
}

export default TopBar;
