import "./VideoPlayerPage.scss";
import HeroVideo from "../../components/heroVideo/HeroVideo.js";
import MainContentWrapper from "../../components/mainContentWrapper/MainContentWrapper.js";
import videosJson from "../../assets/Data/videos.json";
import videoDetailsJson from "../../assets/Data/video-details.json";

function VideoPlayerPage(props) {
  console.log(props.match); //
  const currentVideoId =
    props.match.params.videoId || "84e96018-4022-434e-80bf-000ce4cd12b8";
  const currentVideo = videoDetailsJson.find(
    (video) => video.id === currentVideoId
  );
  const nextVideos = videosJson.filter((video) => video.id !== currentVideo.id);

  return (
    <div>
      <HeroVideo currentVideo={currentVideo} />
      <MainContentWrapper currentVideo={currentVideo} nextVideos={nextVideos} />
    </div>
  );
}

export default VideoPlayerPage;
