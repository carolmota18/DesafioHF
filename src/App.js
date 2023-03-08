import React from "react";
import "./styles.css";
import Alface from "./img/alface.png";
import Laranja from "./img/laranja.png";
import Cereja from "./img/cereja.png";
import Cenoura from "./img/cenoura.png";
import Manga from "./img/manga.png";
import Limao from "./img/limao.png";
import Tomate from "./img/tomate.png";
import Beterraba from "./img/beterraba.png";
import styled from "styled-components";

const BoxImages = styled.div`
  width: 400%;
  display: flex;
  flex-wrap: wrap;
  border: solid;
  background-color: pink;
`;

export default class App extends React.Component {
  state = {
    produtosHortFrutti: [
      {
        imagem: Alface
      },
      {
        imagem: Laranja
      },
      {
        imagem: Cereja
      },
      {
        imagem: Cenoura
      },
      {
        imagem: Manga
      },
      {
        imagem: Limao
      },
      {
        imagem: Tomate
      },
      {
        imagem: Beterraba
      }
    ]
  };

  render() {
    return (
      <BoxImages>
        {this.state.produtosHortFrutti.map((item) => (
          <img src={item.imagem} alt="" />
        ))}
      </BoxImages>
    );
  }
}
