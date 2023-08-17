import "./HeaderDiv.css";

function HeaderDiv(props) {
  return (
    <div className="header-div">
      <div className="capa-header-div"></div>
      <div className="foto-main"></div>
      <div className="text-header-div">
        <h1>{props.name}</h1>
        <h3>{props.desc}</h3>
      </div>
      <div className="footer-header-div"></div>
    </div>
  );
}

export default HeaderDiv;