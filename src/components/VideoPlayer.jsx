import React from "react";
const VIDEO_URL = "https://www.youtube.com/embed/tbvmvXzuXfo?si=PYipb3v-qe6DBlPd";

function VideoPlayer() {
  return (
    <div className="video-player justify-center items-center flex flex-col">
      <div className="p-4 mb-4">Recently, I appeared on Brian Piotrowski's podcast "Candidate Spotlight".
        In the episode, we discussed my previous experiences as both a software engineer and a product manager. 
      </div>
      <iframe
        width="560"
        height="315"
        src={VIDEO_URL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="rounded shadow-lg ring-4 ring-stronghold-red"
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
