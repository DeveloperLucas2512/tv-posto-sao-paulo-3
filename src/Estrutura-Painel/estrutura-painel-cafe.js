import React from "react";
import logo from "../Assets/logo-IA-posto-sao-paulo-3.png";

// Imagens dos cafés
import cafeNormal from "../Assets/cafe-normal-semLogo.png";
import cafeCurto from "../Assets/cafe-curto-semLogo.png";
import capuccino from "../Assets/cappuccino-semLogo.png";
import mocaccino from "../Assets/mocaccino-semLogo.png";
import italiana from "../Assets/pingaSemLogo.png";
import chocolate from "../Assets/chocolate-quente-semLogo.png";
import chantilly from "../Assets/adicional-creme-chantilly.png";
import cremeAvela from "../Assets/adicional-creme-avela.png";

import "./estrutura-painel-cafe.css";

const cafes = [
  { nome: "Café Normal (Expresso)", preco: "4,75", imagem: cafeNormal },
  { nome: "Café Curto (Expresso Curto)", preco: "4,50", imagem: cafeCurto },
  { nome: "Capuccino", preco: "6,00", imagem: capuccino },
  { nome: "Mocaccino", preco: "6,00", imagem: mocaccino },
  { nome: "Italiana (Pingado)", preco: "6,00", imagem: italiana },
  { nome: "Chocolate Quente", preco: "6,00", imagem: chocolate },
];

const adicionais = [
  { nome: "Chantilly", preco: "5,30", imagem: chantilly },
  { nome: "Creme de Avelã", preco: "6,00", imagem: cremeAvela },
];

const PainelCafe = () => {
  return (
    <div className="container">
      <div className="imagens-banner">
        <img src={logo} alt="Logo" className="logo-banner" />
      </div>

      <h2 className="coluna-titulo">Cafés & Leite</h2>

      <div className="lista-itens">
        {cafes.map((item, index) => (
          <div key={index} className="item">
            <img
              src={item.imagem}
              alt={item.nome}
              className="cafe-icon-round"
            />
            <span className="name">{item.nome}</span>
            <span className="dots"></span>
            <span className="price">R$ {item.preco}</span>
          </div>
        ))}
      </div>

      <div className="linha-decorativa" />

      <h3 className="subtitulo">Adicionais</h3>

      <div className="adicionais-linha">
        {adicionais.map((item, index) => (
          <div key={index} className="adicional-item">
            <img
              src={item.imagem}
              alt={item.nome}
              className="cafe-icon-round"
            />
            <span className="name">Adicional {item.nome}</span>
            <span className="dots"></span>
            <span className="price">R$ {item.preco}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainelCafe;
