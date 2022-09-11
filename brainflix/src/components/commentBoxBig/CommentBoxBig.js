import "./CommentBoxBig.scss";

function CommentBoxBig(props) {
  return (  
        <textarea
          id="comment-input"
          className="comments-section__input-field"
          type="text"
          name="comment"
          placeholder={props.placeholder}
        ></textarea>
  )
}

export default CommentBoxBig;
