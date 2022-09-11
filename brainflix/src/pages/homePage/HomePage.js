import "./HomePage.scss";
import HeroVideo from "../../components/heroVideo/HeroVideo.js";
import MainContentWrapper from "../../components/mainContentWrapper/MainContentWrapper.js";
import { useState } from "react";
import videosJson from "../../assets/Data/videos.json";
import videoDetailsJson from "../../assets/Data/video-details.json";

function HomePage(props) {
  const [currentVideoId, setcurrentVideoId] = useState(videosJson[0].id); //keeps the initial state of the fist video's id
  const currentVideo = videoDetailsJson.find(
    (video) => video.id === currentVideoId
  );
  const nextVideos = videosJson.filter((video) => video.id !== currentVideo.id);

  return (
    <div>
      <HeroVideo currentVideo={currentVideo} />
      <MainContentWrapper
        currentVideo={currentVideo}
        nextVideos={nextVideos}
        setcurrentVideoId={setcurrentVideoId}
      />
    </div>
  );
}

export default HomePage;
