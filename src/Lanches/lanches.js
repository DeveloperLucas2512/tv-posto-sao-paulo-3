import React from "react";
import "./lanches.css";
import lanchesVideo from "../Assets/vdo-lanches.mp4";
import lanchesImage from "../Assets/img-lanches.png";

const Lanches = () => {
  return (
    <div className="lanches-container">
      <div className="lanches-imagem">
        <img src={lanchesImage} alt="lanches" />
      </div>
      <div className="lanches-video">
        <video src={lanchesVideo} autoPlay muted loop playsInline />
      </div>
    </div>
  );
};

export default Lanches;
