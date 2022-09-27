import "./FormBoxSmall.scss";

function FormBoxSmall(props) {
  return (
    <input
      className="text-area form-input-field--small"
      type="text"
      name="comment"
      placeholder={props.placeholder}
    ></input>
  );
}

export default FormBoxSmall;
