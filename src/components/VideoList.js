import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css'

const VideoList = ({ videos, onVideoSelect }) => {
console.log(videos);
  const renderedList = videos.map((video) => {
    return (
        <div className="a">
      <VideoItem
        key={video.id}
        onVideoSelect={onVideoSelect}
        video={video}
      />
      </div>
    );
  });

  return <div className="dividedlist">{renderedList}</div>;
};

export default VideoList;