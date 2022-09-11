import "./Button.scss";

function Button(props) {
  const type = props.icon ? "primary" : "secondary";

  return (
    <button className={`button button--${type}`}>
      {props.icon && <img src={props.icon} alt="upload-icon" />}
      <p>{props.name}</p>
    </button>
  );
}

export default Button;
