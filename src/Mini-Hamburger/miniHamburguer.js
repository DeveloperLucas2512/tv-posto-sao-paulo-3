import React from "react";
import "./miniHamburguer.css";

const MiniHamburguer = () => {
  return (
    <div className="video-container-hamburguer">
      <video
        src="https://tvpostosaopaulo3.com.br/videos/minihamburguer.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="video-hamburguer"
      />
    </div>
  );
};

export default MiniHamburguer;
