import "./VideoWithDescription.scss";

function VideoWithDescription(props) {
  return (
    <div
      className="video-section__added-comment-wrapper"
      onClick={props.onClick}
    >
      {/* <div className="video-section__img"></div>
      <div className="video-section__added-comment-text-wrapper">
        <div className="video-section__comment-name-and-date-wrapper">
          <p className="video-section__name-of-comment">
            {props.nextVideo.image}
          </p>
          <p className="video-section__date-of-comment">
            {props.nextVideo.title}
          </p>
        </div>
        <p className="video-section__text-of-comment">
          {props.nextVideo.channel}
        </p>
      </div> */}
      {props.video.title}
    </div>
  );
}

export default VideoWithDescription;
