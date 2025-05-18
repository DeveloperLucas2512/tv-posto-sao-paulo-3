import React from "react";
import logo from "../Assets/logo-IA-posto-sao-paulo-3.png";
import "./estrutura-painel-cafe";

const colunas = {
  Sucos: [
    { nome: "Laranja | Garrafa 1Litro", preco: "20,00" },
    { nome: "Laranja | Jarra 500ml", preco: "18,00" },
    { nome: "Laranja | Copo 350ml", preco: "10,00" },
    { espaco: true },
    { subtitulo: "Polpas de Fruta" },
    { subtitulo: "Copo: R$ 9,00  |  Jarra: R$ 15,00" },
    { subtitulo: "Sabores" },
    {
      sabores: [
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
      ],
    },
  ],

  Vitamina: [
    { subtitulo: "Copo: R$ 10,00  |  Jarra: R$ 16,00" },
    { nome: "Jarra Mix", preco: "16,00" },
    { nome: "Copo Mix", preco: "10,00" },
    { nome: "Garrafa 1 Litro", preco: "17,00" },
    { nome: "Garrafa 500ml", preco: "11,00" },
    { espaco: true },
    { nome: "Adicional Leite", preco: "4,50" },
    { nome: "Adicional Polpa Extra", preco: "5,20" },
  ],
};

const PainelPostoSaoPauloVitaminas = () => {
  return (
    <div className="container">
      <div className="imagens-banner">
        <img src={logo} alt="Logo" className="logo-banner" />
      </div>
      <div className="conteudo colunas3">
        {Object.entries(colunas).map(([titulo, itens], i) => (
          <div key={i} className="coluna">
            <h2 className="coluna-titulo">{titulo}</h2>
            {itens.map((item, index) => {
              if (item.espaco)
                return <div key={index} style={{ height: "20px" }}></div>;

              if (item.subtitulo) {
                return (
                  <div key={index} className="subtitulo">
                    {item.subtitulo}
                  </div>
                );
              }

              if (item.sabores) {
                return (
                  <div key={index} className="sabores-grid">
                    {item.sabores.map((sabor, i) => (
                      <div key={i} className="sabor-item">
                        {sabor}
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <div key={index} className="item">
                  <span className="name">{item.nome}</span>
                  <span className="dots"></span>
                  <span className="price">{item.preco}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainelPostoSaoPauloVitaminas;
