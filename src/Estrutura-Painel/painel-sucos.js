import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import logo from "../Assets/logo-IA-posto-sao-paulo-3.png";
import "./painel-sucos.css";

const sabores = [
  {
    nome: "",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/limao.png",
  },
  {
    nome: "",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/maracuja-jarra.png",
  },
  {
    nome: "",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/acerola.png",
  },
  {
    nome: "",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/frutas-vermelhas.png",
  },
  {
    nome: "",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/laranja-natural.png",
  },
  {
    nome: "",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/abacaxi.png",
  },
  {
    nome: "",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/abacaxi-hortela.png",
  },
  {
    nome: "",
    imagem: "https://tvpostosaopaulo3.com.br/imagens/manga.png",
  },
  { nome: "", imagem: "https://tvpostosaopaulo3.com.br/imagens/caju.png" },
];

const PainelSucos = () => {
  return (
    <div className="container-sucos">
      <div className="banner-sucos">
        <img src={logo} alt="Logo" className="logo-sucos" />
      </div>

      <div className="card-sucos">
        <h1 className="titulo-sucos">Suco de Laranja Natural</h1>

        <div className="lista-sucos">
          <div className="item-sucos">
            <span>Garrafa 1L</span>
            <span className="price-sucos">R$ 20,00</span>
          </div>
          <div className="item-sucos">
            <span>Jarra 500ml</span>
            <span className="price-sucos">R$ 18,00</span>
          </div>
          <div className="item-sucos">
            <span>Copo 350ml</span>
            <span className="price-sucos">R$ 10,00</span>
          </div>
        </div>

        <div className="subtitulo-sucos">
          <strong>
            Polpas de Frutas | Copo R$ 9,00 | Jarra R$ 15,00
            <span className="sabores">Sabores:</span>
          </strong>
        </div>

        <br />
        <br />

        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="sabores-carousel-sucos"
        >
          {sabores.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="sabor-card-sucos">
                <img src={item.imagem} alt={item.nome} />
                <span>{item.nome}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PainelSucos;
