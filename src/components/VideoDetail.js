import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {video.title.replace('\\u0026', '&')}</h4>
      </div>
    </div>
  );
};

export default VideoDetail;