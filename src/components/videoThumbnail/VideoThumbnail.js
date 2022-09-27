import "./VideoThumbnail.scss";
import videoPreview from "../../assets/Images/Upload-video-preview.jpg";

function VideoThumbnail() {
  return (
    <div>
      <img
      className="videoThumbnail"
        src={videoPreview}
        alt="video cover"
      ></img>
    </div>
  );
}

export default VideoThumbnail;
