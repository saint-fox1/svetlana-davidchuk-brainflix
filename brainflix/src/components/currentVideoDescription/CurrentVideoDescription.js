import "./CurrentVideoDescription.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

function CurrentVideoDescription(props) {
  const timestamp = props.currentVideo.timestamp;
  const date = new Date(timestamp);

  console.log(props);
  return (
    <div>
      <h1>{props.currentVideo.title}</h1>
      <div>
        <h3>By {props.currentVideo.channel}</h3>
        <p>{date.toLocaleDateString()}</p>
        {/* need to convert to date */}
      </div>
      <div>
        <div>
          <img src={viewsIcon} alt="viewsIcon" />
          {props.currentVideo.views}
        </div>
        <div>
          <img src={likesIcon} alt="likesIcon" />
          {props.currentVideo.likes}
        </div>
      </div>
    </div>
  );
}

export default CurrentVideoDescription;
