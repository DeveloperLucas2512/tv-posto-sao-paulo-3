import React, { useState, useEffect, useMemo } from "react";
import PainelPostoSaoPauloCafe from "./Estrutura-Painel/painel-cafe";
import PainelSucos from "./Estrutura-Painel/painel-sucos";
import MiniHamburguer from "./Mini-Hamburger/miniHamburguer";
import Omelete from "./Omelete/omelete";
import Lanches from "./Lanches/lanches";
import VideosAtualizados from "./VideosAtualizados/videosAtualizados";
import "./App.css";

const App = () => {
  const [iniciar, setIniciar] = useState(false);

  // Sequência desejada, com o vídeo aparecendo 2x
  const sequencia = useMemo(
    () => [
      "cafe",
      "video1",
      "sucos",
      "hamburguer",
      "video2",
      "omelete",
      "lanches",
    ],
    []
  );

  const [idx, setIdx] = useState(0); // índice da sequência

  const painelAtual = sequencia[idx];

  const entrarEmTelaCheia = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
  };

  const handleIniciar = () => {
    entrarEmTelaCheia();
    setIniciar(true);
  };

  useEffect(() => {
    if (!iniciar) return;

    // tempos por painel (ms)
    const tempos = {
      cafe: 10000,
      video1: 25000, // 25s
      sucos: 20000,
      hamburguer: 15000,
      video2: 25000, // 25s
      omelete: 13000,
      lanches: 15000,
    };

    const tempoPainel = tempos[painelAtual] ?? 5000;

    const timeout = setTimeout(() => {
      setIdx((i) => (i + 1) % sequencia.length);
    }, tempoPainel);

    return () => clearTimeout(timeout);
  }, [iniciar, painelAtual, sequencia.length]);

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
      {painelAtual === "cafe" && <PainelPostoSaoPauloCafe />}

      {(painelAtual === "video1" || painelAtual === "video2") && (
        <VideosAtualizados />
      )}

      {painelAtual === "sucos" && <PainelSucos />}
      {painelAtual === "hamburguer" && <MiniHamburguer />}
      {painelAtual === "omelete" && <Omelete />}
      {painelAtual === "lanches" && <Lanches />}
    </>
  );
};

export default App;
