import React from "react";
import logo from "../Assets/logo-IA-posto-sao-paulo-3.png";
import "./estrutura-painel-cafe.css";

// Imagens dos cafés
import cafeNormal from "../Assets/cafe-normal.png";
import cafeCurto from "../Assets/cafe-normal.png";
import capuccino from "../Assets/cafe-normal.png";
import mocaccino from "../Assets/cafe-normal.png";
import italiana from "../Assets/cafe-normal.png";
import chocolate from "../Assets/cafe-normal.png";
import chantilly from "../Assets/cafe-normal.png";
import cremeAvela from "../Assets/cafe-normal.png";

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

const PainelCafeCards = () => {
  return (
    <div className="container">
      <div className="imagens-banner">
        <img src={logo} alt="Logo" className="logo-banner" />
      </div>
      <h2 className="coluna-titulo">Cafés & Leite</h2>

      <div className="cards-grid">
        {cafes.map((item, index) => (
          <div key={index} className="card">
            <img src={item.imagem} alt={item.nome} className="card-img-large" />
            <span className="card-title">{item.nome}</span>
            <span className="card-price">R$ {item.preco}</span>
          </div>
        ))}
      </div>

      <h3 className="subtitulo">Adicionais</h3>
      <div className="linha-horizontal">
        {adicionais.map((item, index) => (
          <div key={index} className="item item-inline">
            <img
              src={item.imagem}
              alt={item.nome}
              className="cafe-icon-round"
            />
            <span className="name">Adicional {item.nome}</span>
            <span className="dots"></span>
            <span className="price">{item.preco}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainelCafeCards;
