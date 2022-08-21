import "./NextVideos.scss";
import VideoWithDescription from "../videoWithDescription/VideoWithDescription.js";

function NextVideos(props) {

    const nextVideos = props.nextVideos;

  return (
    <div>
      
      <div>
      {nextVideos.map((nextVideo, index) => {
        return (
            <VideoWithDescription key={`video-${index}`} nextVideo={nextVideo}/>
        );
      })}
    </div>
    </div>
  );
}

export default NextVideos;
