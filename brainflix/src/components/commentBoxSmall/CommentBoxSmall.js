import "./CommentBoxSmall.scss";

function CommentBoxSmall(props) {
  return (
  <form className="comment-form">
      <input
          className="comment-form__input-field--small"
          type="text"
          name="comment"
          placeholder={props.placeholder}
        ></input>
  </form>
  )
}

export default CommentBoxSmall;
