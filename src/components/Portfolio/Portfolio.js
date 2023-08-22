import "./Portfolio.css";

function Portfolio(props) {
  const limpsum =
    "Sed consequat ligula ac enim hendrerit, in commodo augue facilisis.";

  return (
    <div className="portfolio-div">
      <div className="portfolio-text">
        <h1>
          {props.port_title ? (
            props.port_title
          ) : (
            <span className="invisible">Title here</span>
          )}
        </h1>
        <p>
          {props.port_text ? (
            props.port_text
          ) : (
            <span className="invisible-p">{limpsum}</span>
          )}
        </p>
        <p>__UNDER_CONSTRUCTION__</p>
      </div>
    </div>
  );
}

export default Portfolio;
