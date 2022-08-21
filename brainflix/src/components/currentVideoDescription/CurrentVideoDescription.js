import "./CurrentVideoDescription.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

function CurrentVideoDescription(props) {
  const timestamp = props.currentVideo.timestamp;
  const date = new Date(timestamp);

  console.log(props);
  return (
    <div className="current-video-description__wrapper">
      <h1 className="current-video-description__title">
        {props.currentVideo.title}
      </h1>
      <div className="current-video-description__stats">
        <div className="current-video-description__stats-portion">
          <h3 className="current-video-description__stats-component current-video-description__stats-component--padding-right">
            By {props.currentVideo.channel}
          </h3>
          <p className="current-video-description__stats-component">
            <span className="current-video-description__stats-component--silver">
              {date.toLocaleDateString()}
            </span>
          </p>
        </div>
        <div className="current-video-description__stats-portion">
          <div className="current-video-description__stats-component current-video-description__stats-component--padding-right">
            <img
              className="current-video-description__stats-component-logo"
              src={viewsIcon}
              alt="viewsIcon"
            />
            <span className="current-video-description__stats-component--silver">
              {props.currentVideo.views}
            </span>
          </div>
          <div className="current-video-description__stats-component">
            <img
              className="current-video-description__stats-component-logo"
              src={likesIcon}
              alt="likesIcon"
            />
            <span className="current-video-description__stats-component--silver">
              {props.currentVideo.likes}
            </span>
          </div>
        </div>
      </div>
      <div className="current-video-description__description-text">
        {props.currentVideo.description}
      </div>
    </div>
  );
}

export default CurrentVideoDescription;
