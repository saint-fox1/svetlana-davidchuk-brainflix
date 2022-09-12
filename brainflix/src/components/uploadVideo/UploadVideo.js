import "./UploadVideo.scss";
import VideoThumbnail from "../videoThumbnail/VideoThumbnail.js";
import SubTitle from "../subTitle/SubTitle.js";
import SectionTitle from "../sectionTitle/SectionTitle.js";
import CommentBoxBig from "../commentBoxBig/CommentBoxBig.js";
import CommentBoxSmall from "../commentBoxSmall/CommentBoxSmall.js";
import Button from "../button/Button.js";
import publishIcon from "../../assets/Icons/publish.svg";

function UploadVideo() {
  return (
    <div className="upload-video">
      <SectionTitle sectionTitle="Upload Video" />
      <div className="upload-video__details-wrapper">
        <div>
        <SubTitle subTitle="VIDEO THUMBNAIL" />
        <VideoThumbnail />
        </div>
        <div className="upload-video__form-wrapper">
          <SubTitle subTitle="TITLE YOUR VIDEO" />
          <CommentBoxSmall placeholder="Add a title to your video" />
          <SubTitle subTitle="ADD A VIDEO DESCRIPTION" />
          <CommentBoxBig placeholder="Add a description to your video" />
        </div>
      </div>
      <div className="upload-video__button-wrapper">
        <Button name="PUBLISH" icon={publishIcon} />
        <Button name="CANCEL" />
      </div>
    </div>
  );
}

export default UploadVideo;
