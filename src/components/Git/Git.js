import "./Git.css";

function Git(props) {
  const limpsum =
    "Sed consequat ligula ac enim hendrerit, in commodo augue facilisis.";

  return (
    <div className="git-div">
      <div className="git-text">
        <h1>
          {props.git_title ? (
            props.git_title
          ) : (
            <span className="invisible">Title here</span>
          )}
        </h1>
        <p>
          {props.git_text ? (
            props.git_text
          ) : (
            <span className="invisible-p">{limpsum}</span>
          )}
        </p>
        <a href="https://github.com/kyevat94?tab=repositories" target="blank">
          <div className="git-svg"></div>
          <div className="repo">
            <p>
              &lt;{" "}
              {props.git_link ? (
                props.git_link
              ) : (
                <span className="invisible">Repositories name</span>
              )}{" "}
              /&gt;
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Git;
