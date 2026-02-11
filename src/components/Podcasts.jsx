import React from 'react'
import VideoPlayer from './VideoPlayer'
import { MicrophoneIcon } from "@heroicons/react/24/solid";

function Podcasts() {
  return (
    <div id="video-section" tabIndex={0} aria-label='Introduction Video Section' className="mt-10 pt-10">
    <MicrophoneIcon className="text-main-text hover:animate-pulse mx-auto inline-block w-10 mb-4"/>
    <h1 className="jersey-25 sm:text-5xl text-4xl font-medium title-font mb-4 text-stronghold-platinum">
      Podcast Appearances
    </h1>
    <VideoPlayer />
  </div>
  )
}

export default Podcasts