import React from "react";
import "./omelete.css";
import omeleteVideo from "../Assets/vdo-omelete.mp4";
import omeleteImage from "../Assets/img-omelete.png";

const Omelete = () => {
  return (
    <div className="omelete-container">
      <div className="omelete-imagem">
        <img src={omeleteImage} alt="Omelete" />
      </div>
      <div className="omelete-video">
        <video src={omeleteVideo} autoPlay muted loop playsInline />
      </div>
    </div>
  );
};

export default Omelete;
