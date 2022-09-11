import "./UploadVideo.scss";
import VideoThumbnail from "../videoThumbnail/VideoThumbnail.js";
import SubTitle from "../subTitle/SubTitle.js";
import SectionTitle from "../sectionTitle/SectionTitle.js";

function UploadVideo() {
  return (
    <div className='uploadVideo'>
    <SectionTitle sectionTitle='Upload Video'/>
      <SubTitle subTitle="VIDEO THUMBNAIL" />
      <VideoThumbnail />
      <SubTitle subTitle="TITLE YOUR VIDEO" />
      {/* first comment box */}
      <SubTitle subTitle="ADD A VIDEO DESCRIPTION" />
      {/* seconf comment box */}
       
        
    </div>
  )
}

export default UploadVideo;
