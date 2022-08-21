import "./Comments.scss";

function Comments(props) {
  const comments = props.currentVideo.comments;

  function getRelativeTime(timestamp) {
    const now = Date.now();
    const seconds = Math.floor(now / 1000);
    const oldTimestamp = Math.floor(timestamp / 1000);
    const difference = seconds - oldTimestamp;

    let output = ``;
    let calc;

    if (difference <= 30) {
      return "Just now";
    } else if (difference < 60) {
      // Less than a minute has passed:
      output = `${difference} second`;
    } else if (difference < 3600) {
      // Less than an hour has passed:
      calc = Math.floor(difference / 60);
      output = `${calc} minute`;
    } else if (difference < 86400) {
      // Less than a day has passed:
      calc = Math.floor(difference / 3600);
      output = `${calc} hour`;
    } else if (difference < 2620800) {
      // Less than a month has passed:
      calc = Math.floor(difference / 86400);
      output = `${calc} day`;
    } else if (difference < 31449600) {
      // Less than a year has passed:
      calc = Math.floor(difference / 2620800);
      output = `${calc} month`;
    } else {
      // More than a year has passed:
      calc = Math.floor(difference / 31449600);
      output = `${calc} year`;
    }

    if (calc === 1) {
      // Singular
      return `${output} ago`;
    } else {
      // Plural
      return `${output}s ago`;
    }
  }

  return (
    <section className="comments-section">
      <div className="comments-section__wrapper">
        <h2 className="comments-section__title">Join the Conversation</h2>
        <div className="comments-section__form-wrapper">
          <div className="comments-section__img--static comments-section__img"></div>
          <form id="comment-form">
            <label for="name-input" className="comments-section__label">
              NAME
            </label>
            <br />
            <input
              id="name-input"
              className="comments-section__input-field"
              type="text"
              name="fullName"
              placeholder="Enter your name"
            />
            <br />
            <label for="comment-input" className="comments-section__label">
              COMMENT
            </label>
            <br />
            <textarea
              id="comment-input"
              className="comments-section__input-field"
              type="text"
              name="comment"
              placeholder="Add a new comment"
            ></textarea>
            <br />
            <button type="submit" className="button comments-section__button">
              COMMENT
            </button>
          </form>
        </div>

        {/* Added Comments */}
        <div
          id="comments-container"
          className="comments-section__added-comments"
        ></div>
      </div>

      {comments.map((currentComment, index) => {
        return (
          <div key={`comment-${index}`} className="comments-section__added-comment-wrapper">
            <div className="comments-section__img"></div>
            <div className="comments-section__added-comment-text-wrapper">
              <div className="comments-section__comment-name-and-date-wrapper">
                <p className="comments-section__name-of-comment">
                  {currentComment.name}
                </p>
                <p className="comments-section__date-of-comment">
                  {getRelativeTime(currentComment.timestamp)}
                </p>
              </div>
              <p className="comments-section__text-of-comment">
                {currentComment.comment}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Comments;
