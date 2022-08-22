import "./NextVideos.scss";
import VideoWithDescription from "../videoWithDescription/VideoWithDescription.js";

function NextVideos(props) {
  const nextVideos = props.nextVideos;
  const onVideoClick = props.onVideoClick;
  if (!onVideoClick) {
    return "fail";
  }

  return (
    <div className="next-videos-section">
      <h3 className="next-videos-section__title">NEXT VIDEOS</h3>
      {nextVideos.map((nextVideo, index) => {
        return (
          <VideoWithDescription
            key={`video-${index}`}
            video={nextVideo}
            onClick={() => onVideoClick(nextVideo.id)}
          />
        );
      })}
    </div>
  );
}

export default NextVideos;
