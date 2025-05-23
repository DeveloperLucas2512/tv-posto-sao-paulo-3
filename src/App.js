import React, { useState, useEffect } from "react";
import PainelPostoSaoPauloCafe from "./Estrutura-Painel/painel-cafe";
import PainelVitaminasSucos from "./Estrutura-Painel/painel-sucos";
import "./App.css";

const App = () => {
  const [iniciar, setIniciar] = useState(false);
  const [painelAtual, setPainelAtual] = useState("cafe");

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

  useEffect(() => {
    if (!iniciar) return;

    const tempo = 50000; // 5 segundos para qualquer painel

    const timeout = setTimeout(() => {
      setPainelAtual((prev) => (prev === "cafe" ? "sucos" : "cafe"));
    }, tempo);

    return () => clearTimeout(timeout);
  }, [iniciar, painelAtual]);

  if (!iniciar) {
    return (
      <div className="video-tela-inicial">
        <button onClick={handleIniciar} className="video-botao-iniciar">
          Iniciar Apresentação Posto São Paulo 3
        </button>
      </div>
    );
  }

  return (
    <>
      {painelAtual === "cafe" ? (
        <PainelVitaminasSucos />
      ) : (
        <PainelVitaminasSucos />
      )}
    </>
  );
};

export default App;
