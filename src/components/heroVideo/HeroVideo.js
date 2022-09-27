import "./HeroVideo.scss";

function HeroVideo(props) {
  return (
    <video className="hero-video" controls poster={props.currentVideo.image}>
      <source src={props.currentVideo.video}></source>
    </video>
  );
}

export default HeroVideo;
