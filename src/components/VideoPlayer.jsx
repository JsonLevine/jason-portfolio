import React from "react";
const VIDEO_URL = "https://www.youtube.com/embed/tbvmvXzuXfo?si=PYipb3v-qe6DBlPd";

function VideoPlayer() {
  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src={VIDEO_URL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
