import "./Button.scss";

function Button(props) {
  const type = props.icon ? "primary" : "secondary";

  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className={`button button--${type}`} onClick={onClick}>
      {props.icon && <img src={props.icon} alt="upload-icon" />}
      <p>{props.name}</p>
    </button>
  );
}

export default Button;
