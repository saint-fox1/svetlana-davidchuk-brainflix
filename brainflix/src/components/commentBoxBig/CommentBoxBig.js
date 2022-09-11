import "./CommentBoxBig.scss";

function CommentBoxBig(props) {
  return (
    <form className="comment-form">
    <textarea
      className="comment-form__input-field--big"
      type="text"
      name="comment"
      placeholder={props.placeholder}
    ></textarea>
    </form>
  );
}

export default CommentBoxBig;
