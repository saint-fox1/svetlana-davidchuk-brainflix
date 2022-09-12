import "./CommentBoxBig.scss";

function CommentBoxBig(props) {
  return (
    <textarea
      className=" comment-form form-input-field--big"
      type="text"
      name="comment"
      placeholder={props.placeholder}
    ></textarea>
  );
}

export default CommentBoxBig;
