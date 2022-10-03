import "./UploadVideoPage.scss";
import VideoThumbnail from "../../components/videoThumbnail/VideoThumbnail.js";
import SubTitle from "../../components/subTitle/SubTitle.js";
import SectionTitle from "../../components/sectionTitle/SectionTitle.js";
import CommentBoxBig from "../../components/formBoxBig/FormBoxBig.js";
import CommentBoxSmall from "../../components/formBoxSmall/FormBoxSmall.js";
import Button from "../../components/button/Button.js";
import publishIcon from "../../assets/Icons/publish.svg";
import axios from "axios";

function UploadVideoPage() {
  const onSubmit = () => {
    axios
      .post("http://localhost:8080/videos/", {
        title: document.getElementById("videoTitleInput").value,
        description: document.getElementById("videoDescriptionInput").value,
        image: "http://localhost:8080/images/thumbnail.jpg",
        channel: "Svetlana's Channel",
        duration: "4:00",
        video: "https://project-2-api.herokuapp.com/stream",
      })
      .then((response) => {
        alert("Upload is successful");
      })
      .catch((e) => {
        console.error("The error:", e);
      });
  };

  return (
    <div className="upload-video">
      <SectionTitle sectionTitle="Upload Video" />
      <div className="upload-video__details-wrapper">
        <div>
          <SubTitle subTitle="VIDEO THUMBNAIL" />
          <VideoThumbnail />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="upload-video__form-wrapper"
        >
          <SubTitle subTitle="TITLE YOUR VIDEO" />
          <CommentBoxSmall
            placeholder="Add a title to your video"
            id="videoTitleInput"
          />
          <SubTitle subTitle="ADD A VIDEO DESCRIPTION" />
          <CommentBoxBig
            placeholder="Add a description to your video"
            id="videoDescriptionInput"
          />
        </form>
      </div>
      <div className="upload-video__button-wrapper">
        <Button onClick={onSubmit} name="PUBLISH" icon={publishIcon} />
        <Button name="CANCEL" />
      </div>
    </div>
  );
}

export default UploadVideoPage;
