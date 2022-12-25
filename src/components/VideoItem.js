import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
        alt={video.title}
      />
      <div className="content">
        <div className="header">{video.title.replaceAll('\\u0026', '&')}</div>
      </div>
    </div>
  );
};

export default VideoItem;