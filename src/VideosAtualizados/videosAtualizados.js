import React, { useEffect, useRef } from "react";
import "./videosAtualizados.css";
import videoSrc from "../Assets/vdo-novo-produtos-valores.mp4"; // use caminho relativo (não o D:\)

const VideosAtualizados = ({ onEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Tenta dar play assim que montar
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch (err) {
        // Alguns browsers só liberam autoplay após interação — segue silencioso
        // Opcional: você pode exibir um botão "Tocar" e dar v.play() no onClick
        // console.warn("Autoplay bloqueado pelo navegador:", err);
      }
    };

    tryPlay();
  }, []);

  return (
    <div className="video-atualizados__wrapper">
      <video
        ref={videoRef}
        className="video-atualizados__fullscreen"
        src={videoSrc}
        autoPlay
        muted
        playsInline
        // controls  // se quiser mostrar controles, descomente
        onEnded={() => onEnd && onEnd()}
        onError={() => onEnd && onEnd()} // se der erro, avança também
      />
    </div>
  );
};

export default VideosAtualizados;
