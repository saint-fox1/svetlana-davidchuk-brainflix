import "./UploadVideoPage.scss";
import VideoThumbnail from "../../components/videoThumbnail/VideoThumbnail.js";
import SubTitle from "../../components/subTitle/SubTitle.js";
import SectionTitle from "../../components/sectionTitle/SectionTitle.js";
import CommentBoxBig from "../../components/formBoxBig/FormBoxBig.js";
import CommentBoxSmall from "../../components/formBoxSmall/FormBoxSmall.js";
import Button from "../../components/button/Button.js";
import publishIcon from "../../assets/Icons/publish.svg";

function UploadVideoPage() {
  const onSubmit = () => {
    alert("Upload is successful");
    window.location.href = "/";
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
          <CommentBoxSmall placeholder="Add a title to your video" />
          <SubTitle subTitle="ADD A VIDEO DESCRIPTION" />
          <CommentBoxBig placeholder="Add a description to your video" />
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
