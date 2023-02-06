import React, { useEffect, useRef } from "react";
function Page({ mpd }) {
  const videoContainer = useRef(null);
  const video = useRef(null);

  useEffect(() => {
    // let videos = video.current;
    // let videosContainer = videoContainer.current;
    // let player = new shaka.Player(video);
    // const ui = new shaka.ui.Overlay(player, videosContainer, videos);
    // const controls = ui.getControls();
    // console.log(Object.keys(shaka.ui));
    // player.load("/h264.mpd").then(() => {
    //   console.log("running");
    // });
  });
  return (
    <div
      className="shadow-lg mx-auto max-w-full"
      ref={videoContainer}
      style={{ width: "800px" }}
    >
      <video id="video" ref={video} className="w-full h-full"></video>
    </div>
  );
}

export default Page;
