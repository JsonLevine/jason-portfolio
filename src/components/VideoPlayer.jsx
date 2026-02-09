import React from "react";
const VIDEO_URL = "https://www.youtube.com/embed/tbvmvXzuXfo?si=PYipb3v-qe6DBlPd";

function VideoPlayer() {
  return (
    <div className="video-player justify-center items-center flex flex-col">
      <div className="p-4 mb-4">Recently, I appeared on Brian Piotrowski's podcast "Candidate Spotlight".
        In the episode, we discussed my previous experiences as both a software engineer and a product manager. 
      </div>
      <div class="rounded shadow-lg ring-4 ring-stronghold-red relative pb-[56.25%] w-full  overflow-hidden max-w-full">
      <iframe
        src={VIDEO_URL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;
