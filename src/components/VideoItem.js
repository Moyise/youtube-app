import React from "react";
import "./VideoItem.css";

function VideoItem({ video, onVideoSelect }) {
  const imageUrl = video.snippet.thumbnails.medium.url;
  const description = video.snippet.description;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui small image" src={imageUrl} alt={description} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
