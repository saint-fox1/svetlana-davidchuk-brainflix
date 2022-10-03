import "./FormBoxSmall.scss";

function FormBoxSmall(props) {
  return (
    <input
      className="text-area form-input-field--small"
      type="text"
      name="comment"
      placeholder={props.placeholder}
      id={props.id}
    ></input>
  );
}

export default FormBoxSmall;
