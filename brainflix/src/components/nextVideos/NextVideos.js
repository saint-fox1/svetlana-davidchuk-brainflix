import "./NextVideos.scss";
import VideoWithDescription from "../videoWithDescription/VideoWithDescription.js";
import SubTitle from "../subTitle/SubTitle.js";

function NextVideos(props) {
  const nextVideos = props.nextVideos;

  return (
    <div className="next-videos-section">
        <SubTitle subTitle='NEXT VIDEO'/>
     <div className='next-videos-section__videos-wrapper'>
      {nextVideos.map((nextVideo, index) => {
        return (
          <VideoWithDescription
            key={`video-${index}`}
            video={nextVideo}
          />
        );
      })}
      </div>
    </div>
  );
}

export default NextVideos;
