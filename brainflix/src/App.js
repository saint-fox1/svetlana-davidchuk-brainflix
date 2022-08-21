import "./App.scss";
import { useState } from "react";
import videosJson from "./assets/Data/videos.json";
import videoDetailsJson from "./assets/Data/video-details.json";
import Header from "./components/header/Header.js";
import HeroVideo from "./components/heroVideo/HeroVideo.js";
import MainContentWrapper from "./components/mainContentWrapper/MainContentWrapper.js";
import NextVideos from "./components/nextVideos/NextVideos.js";

function App() {
  // const [videoData, setVideoData] = useState(videosJson); - storing the 1st api call
  // const [videoDetails, setVideoDetails] = useState(videoDetailsJson); - storing the 2nd api call
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const currentVideo = videoDetailsJson[currentVideoIndex];
  const nextVideos = videosJson.filter((video) => video.id !== currentVideo.id);

  return (
    <div className="App">
      <Header />
      <HeroVideo currentVideo={currentVideo} />
      <MainContentWrapper currentVideo={currentVideo} nextVideos={nextVideos} />
      <NextVideos nextVideos={nextVideos} />
      <button onClick={() => setCurrentVideoIndex(currentVideoIndex + 1)}>
        click me
      </button>
    </div>
  );
}

export default App;
