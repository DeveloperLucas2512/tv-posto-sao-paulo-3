import React, { useState } from "react";
import PainelPostoSaoPaulo from "./Estrutura-Painel/estrutura-painel";

import "./App.css";

const App = () => {
  const [iniciar, setIniciar] = useState(false);

  const entrarEmTelaCheia = () => {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  const handleIniciar = () => {
    entrarEmTelaCheia();
    setIniciar(true);
  };

  if (!iniciar) {
    return (
      <div className="video-tela-inicial">
        <button onClick={handleIniciar} className="video-botao-iniciar">
          Iniciar Apresentação Posto São Paulo 3
        </button>
      </div>
    );
  }

  return <PainelPostoSaoPaulo />;
};

export default App;
