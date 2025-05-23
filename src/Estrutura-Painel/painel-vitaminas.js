import React from "react";
import logo from "../Assets/logo-IA-posto-sao-paulo-3.png";
import "./painel-sucos.css";

const sabores = [
  {
    nome: "Acerola",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/acerola.png",
  },
  {
    nome: "Frutas Vermelhas",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/frutas-vermelhas.png",
  },
  {
    nome: "Laranja",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/laranja.png",
  },
  {
    nome: "Maracujá",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/maracuja.png",
  },
  { nome: "Abacaxi" },
  { nome: "Abacaxi c/ Hortelã" },
  { nome: "Caju" },
  { nome: "Morango" },
  { nome: "Manga" },
  { nome: "Limão" },
  { nome: "Uva" },
];

const PainelSucos = () => {
  return (
    <div className="container-sucos">
      <div className="banner-sucos">
        <img src={logo} alt="Logo" className="logo-sucos" />
      </div>

      <div className="conteudo-sucos">
        {/* Coluna Vitaminas */}
        <div className="coluna-sucos">
          <h2 className="titulo-sucos">Vitaminas</h2>

          <div className="subtitulo-sucos">Copo R$ 10,00 | Jarra R$ 16,00</div>

          <div className="item-sucos">
            <span className="name-sucos">Jarra Mix</span>
            <span className="dots-sucos"></span>
            <span className="price-sucos">R$ 16,00</span>
          </div>

          <div className="item-sucos">
            <span className="name-sucos">Copo Mix</span>
            <span className="dots-sucos"></span>
            <span className="price-sucos">R$ 10,00</span>
          </div>

          <div className="item-sucos">
            <span className="name-sucos">Garrafa 1L</span>
            <span className="dots-sucos"></span>
            <span className="price-sucos">R$ 17,00</span>
          </div>

          <div className="item-sucos">
            <span className="name-sucos">Garrafa 500ml</span>
            <span className="dots-sucos"></span>
            <span className="price-sucos">R$ 11,00</span>
          </div>

          <div className="subtitulo-sucos">Adicionais</div>

          <div className="item-sucos">
            <span className="name-sucos">Adicional Leite</span>
            <span className="dots-sucos"></span>
            <span className="price-sucos">R$ 4,50</span>
          </div>

          <div className="item-sucos">
            <span className="name-sucos">Adicional Polpa Extra</span>
            <span className="dots-sucos"></span>
            <span className="price-sucos">R$ 5,20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelSucos;
