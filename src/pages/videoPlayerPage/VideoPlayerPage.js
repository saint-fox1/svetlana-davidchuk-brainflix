import "./VideoPlayerPage.scss";
import HeroVideo from "../../components/heroVideo/HeroVideo.js";
import MainContentWrapper from "../../components/mainContentWrapper/MainContentWrapper.js";
import React from "react";
import axios from "axios";

class VideoPlayerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      videos: null,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/videos/")
      .then((response) => {
        const data = response.data;
        this.setState({ videos: data });
        window.scrollTo(0, 0);
      })
      .catch((e) => {
        console.error("The error:", e);
      });
  }

  componentDidUpdate(prevProps) {
    const shouldGetVideo =
      this.state.videos !== null && this.state.currentVideo === null;
    if (shouldGetVideo || prevProps.match !== this.props.match) {
      const currentVideoId =
        this.props.match.params.videoId || this.state.videos[0].id;

      axios
        .get("http://localhost:8080/videos/" + currentVideoId)
        .then((response) => {
          const data = response.data;
          this.setState({ currentVideo: data });
          window.scrollTo(0, 0);
        })
        .catch((e) => {
          console.error("The error:", e);
        });
    }
  }

  render() {
    if (this.state.currentVideo === null) {
      return null;
    }

    const nextVideos = this.state.videos.filter(
      (video) => video.id !== this.state.currentVideo.id
    );

    return (
      <div>
        <HeroVideo currentVideo={this.state.currentVideo} />
        <MainContentWrapper
          currentVideo={this.state.currentVideo}
          nextVideos={nextVideos}
        />
      </div>
    );
  }
}

export default VideoPlayerPage;
