import "./MainContentWrapper.scss";
import CurrentVideoDescription from "../currentVideoDescription/CurrentVideoDescription.js";
import NextVideos from "../nextVideos/NextVideos.js";
import Comments from "../comments/Comments.js";

function MainContentWrapper(props) {
  return (
    <div className='main-content-wrapper'>
      <div>
        <CurrentVideoDescription currentVideo={props.currentVideo} />
        <Comments currentVideo={props.currentVideo} />
      </div>
      <NextVideos
        nextVideos={props.nextVideos}
        onVideoClick={props.setcurrentVideoId}
      />
    </div>
  );
}

export default MainContentWrapper;
