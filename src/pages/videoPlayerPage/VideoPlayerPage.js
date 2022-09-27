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
      apiKey: null,
      videos: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://project-2-api.herokuapp.com/register")
      .then((response) => {
        this.setState({ apiKey: response.data["api_key"] });
        axios
          .get(
            "https://project-2-api.herokuapp.com/videos?api_key=" +
              this.state.apiKey
          )
          .then((response) => {
            this.setState({ videos: response.data });
          })
          .catch((e) => {
            console.error("The error:", e);
          });
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
        .get(
          "https://project-2-api.herokuapp.com/videos/" +
            currentVideoId +
            "?api_key=" +
            this.state.apiKey
        )
        .then((response) => {
          const data = response.data;
          data.video = data.video + "?api_key=" + this.state.apiKey;
          this.setState({ currentVideo: data });
          window.scrollTo(0, 0);
        })
        .catch((e) => {
          console.error("The error:", e);
        });
    }
  }

  render(props) {
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
