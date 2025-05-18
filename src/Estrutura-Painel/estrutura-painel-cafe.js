import React from "react";
import logo from "../Assets/logo-IA-posto-sao-paulo-3.png";
import cafeCurto from "../Assets/cafe-curto.png";
import cafeNormal from "../Assets/cafe-normal.png";
import leiteComAchocolatado from "../Assets/leite-achocolatado.png";
import "./estrutura-painel-cafe.css";

// Dados organizados
const coluna1 = [
  { nome: "Café Normal(Expresso)", preco: "4,75", imagem: cafeCurto },
  { nome: "Café Curto(Expresso-Curto)", preco: "4,50", imagem: cafeNormal },
  { nome: "Capuccino", preco: "6,00", imagem: cafeNormal },
];

const coluna2 = [
  { nome: "Mocaccino", preco: "6,00", imagem: cafeNormal },
  { nome: "Italiana(Pingado)", preco: "6,00", imagem: cafeNormal },
  { nome: "Chocolate Quente", preco: "6,00", imagem: cafeNormal },
];

const adicionais = [
  { nome: "Adicional Chantilly", preco: "5,30", imagem: cafeNormal },
  { nome: "Adicional Creme de Avelã", preco: "6,00", imagem: cafeNormal },
];

const leite = [
  {
    nome: "Leite com Achocolatado",
    preco: "7,50",
    imagem: leiteComAchocolatado,
  },
];

const PainelPostoSaoPauloCafe = () => {
  return (
    <div className="container">
      <div className="imagens-banner">
        <img src={logo} alt="Logo" className="logo-banner" />
      </div>

      <h2 className="coluna-titulo">Cafés & Leite</h2>

      <div className="duas-colunas">
        <div className="coluna">
          {coluna1.map((item, index) => (
            <div key={index} className="item">
              <img
                src={item.imagem}
                alt={item.nome}
                className="cafe-icon-round"
              />
              <span className="name">{item.nome}</span>
              <span className="dots"></span>
              <span className="price">{item.preco}</span>
            </div>
          ))}
        </div>

        <div className="coluna">
          {coluna2.map((item, index) => (
            <div key={index} className="item">
              <img
                src={item.imagem}
                alt={item.nome}
                className="cafe-icon-round"
              />
              <span className="name">{item.nome}</span>
              <span className="dots"></span>
              <span className="price">{item.preco}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="item-separador" />

      <div className="coluna">
        <div className="bloco-subtitulos">
          <div className="bloco">
            <h3 className="subtitulo">Adicionais</h3>
            {adicionais.map((item, index) => (
              <div key={index} className="item-subtitle">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="cafe-icon-round"
                />
                <span className="name-subtitle">{item.nome}</span>
                <span className="dots"></span>
                <span className="price">{item.preco}</span>
              </div>
            ))}
          </div>

          <div className="bloco">
            <h3 className="subtitulo">Leite</h3>
            {leite.map((item, index) => (
              <div key={index} className="item-subtitle">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="cafe-icon-round"
                />
                <span className="name-subtitle">{item.nome}</span>
                <span className="dots"></span>
                <span className="price">{item.preco}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelPostoSaoPauloCafe;
