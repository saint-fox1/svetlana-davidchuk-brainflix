import "./VideoWithDescription.scss";

function VideoWithDescription(props) {
  return (
    <div className="comments-section__added-comment-wrapper">
      <div className="comments-section__img"></div>
      <div className="comments-section__added-comment-text-wrapper">
        <div className="comments-section__comment-name-and-date-wrapper">
          <p className="comments-section__name-of-comment">
            {props.nextVideo.image}
          </p>
          <p className="comments-section__date-of-comment">
            {props.nextVideo.title}
          </p>
        </div>
        <p className="comments-section__text-of-comment">
          {props.nextVideo.channel}
        </p>
      </div>
    </div>
  );
}

export default VideoWithDescription;
