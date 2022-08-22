import "./App.scss";
import { useState } from "react";
import videosJson from "./assets/Data/videos.json";
import videoDetailsJson from "./assets/Data/video-details.json";
import Header from "./components/header/Header.js";
import HeroVideo from "./components/heroVideo/HeroVideo.js";
import MainContentWrapper from "./components/mainContentWrapper/MainContentWrapper.js";

function App() {
  const [videoData, setVideoData] = useState(videosJson); // storing the 1st api call
  const [videoDetails, setVideoDetails] = useState(videoDetailsJson); // storing the 2nd api call
  const [currentVideoId, setcurrentVideoId] = useState(videosJson[0].id); //keeps the initial state of the fist video's id
  const currentVideo = videoDetailsJson.find(
    (video) => video.id === currentVideoId
  );
  const nextVideos = videosJson.filter((video) => video.id !== currentVideo.id);

  return (
    <div className="App">
      <Header />
      <HeroVideo currentVideo={currentVideo} />
      <MainContentWrapper
        currentVideo={currentVideo}
        nextVideos={nextVideos}
        setcurrentVideoId={setcurrentVideoId}
      />
    </div>
  );
}

export default App;
