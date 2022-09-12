import "./VideoWithDescription.scss";
import { Link } from "react-router-dom";

function VideoWithDescription(props) {
  return (
    <Link to={`/video/${props.video.id}`}>
      <div className="video-with-description" onClick={props.onClick}>
        <img
          className="video-with-description__video"
          src={props.video.image}
          alt="next-video"
        />
        <div className="video-with-description__text-wrapper">
          <h3 className="video-with-description__title">{props.video.title}</h3>
          <p className="video-with-description__channel">
            {props.video.channel}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default VideoWithDescription;
