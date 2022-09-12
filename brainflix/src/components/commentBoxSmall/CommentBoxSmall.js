import "./CommentBoxSmall.scss";

function CommentBoxSmall(props) {
  return (
    <input
      className="comment-form form-input-field--small"
      type="text"
      name="comment"
      placeholder={props.placeholder}
    ></input>
  );
}

export default CommentBoxSmall;
