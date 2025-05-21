import React from "react";
import logo from "../Assets/logo-IA-posto-sao-paulo-3.png";
import "./estrutura-painel-sucos.css";

const PainelPostoSaoPauloVitaminas = () => {
  return (
    <div className="container">
      <div className="imagens-banner-suco">
        <img src={logo} alt="Logo" className="logo-banner" />
      </div>

      <div className="conteudo">
        {/* Coluna Sucos */}
        <div className="coluna">
          <h2 className="coluna-titulo">Sucos</h2>

          <div className="item">
            <span className="name">Laranja | Garrafa 1 Litro</span>
            <span className="dots"></span>
            <span className="price">R$ 20,00</span>
          </div>

          <div className="item">
            <span className="name">Laranja | Jarra 500ml</span>
            <span className="dots"></span>
            <span className="price">R$ 18,00</span>
          </div>

          <div className="item">
            <span className="name">Laranja | Copo 350ml</span>
            <span className="dots"></span>
            <span className="price">R$ 10,00</span>
          </div>

          <div className="subtitulo">Polpas de Fruta</div>
          <div className="subtitulo">Copo: R$ 9,00 | Jarra: R$ 15,00</div>
          <div className="subtitulo-sucos">Sabores</div>

          <div className="sabores-grid">
            {[
              "Abacaxi",
              "Abacaxi c/ Hortelã",
              "Maracujá",
              "Frutas Vermelhas",
              "Acerola",
              "Caju",
              "Morango",
              "Manga",
              "Limão",
              "Uva",
            ].map((sabor, index) => (
              <div key={index} className="sabor-item">
                {sabor}
              </div>
            ))}
          </div>
        </div>

        {/* Coluna Vitaminas */}
        <div className="coluna">
          <h2 className="coluna-titulo">Vitaminas</h2>

          <div className="subtitulo">Copo: R$ 10,00 | Jarra: R$ 16,00</div>

          <div className="item">
            <span className="name">Jarra Mix</span>
            <span className="dots"></span>
            <span className="price">R$ 16,00</span>
          </div>

          <div className="item">
            <span className="name">Copo Mix</span>
            <span className="dots"></span>
            <span className="price">R$ 10,00</span>
          </div>

          <div className="item">
            <span className="name">Garrafa 1 Litro</span>
            <span className="dots"></span>
            <span className="price">R$ 17,00</span>
          </div>

          <div className="item">
            <span className="name">Garrafa 500ml</span>
            <span className="dots"></span>
            <span className="price">R$ 11,00</span>
          </div>

          <div className="subtitulo">Adicionais</div>

          <div className="item">
            <span className="name">Adicional Leite</span>
            <span className="dots"></span>
            <span className="price">R$ 4,50</span>
          </div>

          <div className="item">
            <span className="name">Adicional Polpa Extra</span>
            <span className="dots"></span>
            <span className="price">R$ 5,20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelPostoSaoPauloVitaminas;
