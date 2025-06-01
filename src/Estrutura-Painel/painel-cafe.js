import React from "react";
import logo from "../Assets/logo-IA-posto-sao-paulo-3.png";
import "./painel-cafe.css";

// Imagens dos cafés
import cafeNormal from "../Assets/cafe-normal-semLogo.png";
import cafeCurto from "../Assets/cafe-curto-semLogo.png";
import capuccino from "../Assets/cappuccino-semLogo.png";
import mocaccino from "../Assets/mocaccino-semLogo.png";
import italiana from "../Assets/pingaSemLogo.png";
import chocolate from "../Assets/chocolate-quente-semLogo.png";
import chantilly from "../Assets/adicional-creme-chantilly.png";
import cremeAvela from "../Assets/adicional-creme-avela.png";
import achocolatado from "../Assets/leite-achocolatado.png";

const cafes = [
  { nome: "Café Normal (Expresso)", preco: "4,75", imagem: cafeNormal },
  { nome: "Café Curto (Expresso Curto)", preco: "4,50", imagem: cafeCurto },
  { nome: "Capuccino", preco: "6,00", imagem: capuccino },
  { nome: "Mocaccino", preco: "6,00", imagem: mocaccino },
  { nome: "Italiana (Pingado)", preco: "6,00", imagem: italiana },
  { nome: "Chocolate Quente", preco: "6,00", imagem: chocolate },
  { nome: "Leite c/ Achocolatado", preco: "7,50", imagem: achocolatado },
];

const adicionais = [
  { nome: "Chantilly", preco: "5,30", imagem: chantilly },
  { nome: "Creme de Avelã", preco: "6,00", imagem: cremeAvela },
];

const PainelCafe = () => {
  return (
    <div className="container-cafe">
      <div className="imagens-banner-cafe">
        <img src={logo} alt="Logo" className="logo-banner-cafe" />
      </div>

      <div className="coluna-cafe">
        <h2 className="coluna-titulo-cafe">Cafés & Leite</h2>

        <div className="lista-itens-cafe">
          {cafes.map((item, index) => (
            <div key={index} className="item-cafe">
              <img
                src={item.imagem}
                alt={item.nome}
                className="cafe-icon-round-cafe"
              />
              <span className="name-cafe">{item.nome}</span>
              <span className="price-cafe">R$ {item.preco}</span>
              <br />
              <span className="dots-cafe"></span>
            </div>
          ))}
        </div>
        <div className="linha-decorativa-cafe" />
      </div>

      <h3 className="subtitulo-cafe">Adicionais</h3>

      <div className="adicionais-linha-cafe">
        {adicionais.map((item, index) => (
          <div key={index} className="adicional-item-cafe">
            <img
              src={item.imagem}
              alt={item.nome}
              className="img-cafes-adicional-cafe"
            />
            <span className="name-cafe"> {item.nome}</span>
            <span className="dots-cafe"></span>
            <span className="price-adicional-cafe">R$ {item.preco}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainelCafe;
