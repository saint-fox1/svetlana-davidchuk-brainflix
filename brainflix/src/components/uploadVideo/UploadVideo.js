import "./UploadVideo.scss";
import VideoThumbnail from "../videoThumbnail/VideoThumbnail.js";
import SubTitle from "../subTitle/SubTitle.js";
import SectionTitle from "../sectionTitle/SectionTitle.js";
import CommentBoxBig from "../commentBoxBig/CommentBoxBig.js";

function UploadVideo() {
  return (
    <div className='uploadVideo'>
    <SectionTitle sectionTitle='Upload Video'/>
      <SubTitle subTitle="VIDEO THUMBNAIL" />
      <VideoThumbnail />
      <SubTitle subTitle="TITLE YOUR VIDEO" />
      {/* small box here */}
      <SubTitle subTitle="ADD A VIDEO DESCRIPTION" />
      <CommentBoxBig placeholder="Add a description to your video"/>
       
        
    </div>
  )
}

export default UploadVideo;
