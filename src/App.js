import React, { useState, useEffect } from "react";
import PainelPostoSaoPauloCafe from "./Estrutura-Painel/painel-cafe";
import PainelSucos from "./Estrutura-Painel/painel-sucos";
import MiniHamburguer from "./Mini-Hamburger/miniHamburguer";
import Omelete from "./Omelete/omelete";
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

    let tempoPainel = 5000; // default

    if (painelAtual === "cafe") tempoPainel = 10000;
    else if (painelAtual === "sucos") tempoPainel = 20000;
    else if (painelAtual === "hamburguer") tempoPainel = 15000;
    else if (painelAtual === "omelete") tempoPainel = 13000;

    const timeout = setTimeout(() => {
      setPainelAtual((prev) => {
        if (prev === "cafe") return "sucos";
        if (prev === "sucos") return "hamburguer";
        if (prev === "hamburguer") return "omelete";
        if (prev === "omelete") return "cafe";
        return "cafe";
      });
    }, tempoPainel);

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
      {painelAtual === "cafe" && <PainelPostoSaoPauloCafe />}
      {painelAtual === "sucos" && <PainelSucos />}
      {painelAtual === "hamburguer" && <MiniHamburguer />}
      {painelAtual === "omelete" && <Omelete />}
    </>
  );
};

export default App;
