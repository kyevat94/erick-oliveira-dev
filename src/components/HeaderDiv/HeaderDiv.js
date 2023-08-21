import "./HeaderDiv.css";

import { Skeleton, colors } from "@mui/material";

function HeaderDiv(props) {
  return (
    <div className="header-div">
      <div className="capa-header-div"></div>
      <div className="foto-main"></div>
      <div className="text-header-div">
        <h1>
          {props.name ? (
            props.name
          ) : (
            <span className="invisible">Full Person Name</span>
          )}
        </h1>
        <h3>
          {props.desc ? (
            props.desc
          ) : (
            <span className="invisible">Position Description</span>
          )}
        </h3>
      </div>
      <div className="footer-header-div"></div>
    </div>
  );
}

export default HeaderDiv;
