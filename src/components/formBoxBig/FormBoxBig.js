import "./FormBoxBig.scss";

function FormBoxBig(props) {
  return (
    <textarea
      className=" text-area form-input-field--big"
      type="text"
      name="comment"
      placeholder={props.placeholder}
    ></textarea>
  );
}

export default FormBoxBig;
