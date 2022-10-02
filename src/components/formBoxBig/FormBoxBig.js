import "./FormBoxBig.scss";

function FormBoxBig(props) {
  return (
    <textarea
      className=" text-area form-input-field--big"
      type="text"
      name="comment"
      placeholder={props.placeholder}
      id={props.id}
    ></textarea>
  );
}

export default FormBoxBig;
