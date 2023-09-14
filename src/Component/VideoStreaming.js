
import React, { useState, useEffect } from "react";

const VideoStreaming = () => {
  const [selectedVideo, setSelectedVideo] = useState(
    "https://www.w3schools.com/html/mov_bbb.mp4"
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "flex-end",
        backgroundColor: "black",
        color: "white",
        padding: "90px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1>What are you Waiting for ?</h1>
        <h1> Start it Today ?</h1>
        <p>
          The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          02-Nov-2020
        </p>
        <button style={{ backgroundColor: "#00a67e", borderRadius: "10px" }}>
          Find out more
        </button>
      </div>
      {selectedVideo && (
        <div style={{ flex: 1, marginLeft: "20px" }}>
          <video controls width="500">
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoStreaming;



