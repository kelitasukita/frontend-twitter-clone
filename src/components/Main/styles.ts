import styled, { css } from "styled-components";
import { ArrowLeft, Home, Search, Notifications, Email } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Indica que o layout vai trabalhar com colunas, de cima para baixo. */

  width: min(601px, 100%); /* A largura será o mínimo valor entre a regra de 601px e 100% do tamanho da tela. */

  @media (min-width: 500px) { /* Add breaking points sobre a responsividade. */
    /* Na linha de cima está dizendo que a partir de 500px do tamanho da tela, faça o que está embaixo. */
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;


export const Header = styled.div`
  z-index: 2; /* Ele deixa o elemento fixo no topo sem ser sobreposto qdo rolar a barra de rolagem. */
  position: sticky; /* Aqui está dizendo que a posição do Header vai ficar presa no topo da tela. */
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  /* text-align: center; */

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;
    
    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;
export const BackIcon = styled(ArrowLeft)` 
  width: 24px;
  height: 24px;

  fill: var(--twitter);

`;
export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`; 

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  /* Esse cálculo faz com que a barra de menus mude de acordo com o tamanho da tela */
  padding: 8px min(46px, max(10vw, 10px)); 

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCss = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`${iconCss}`;
export const SearchIcon = styled(Search)`${iconCss}`;
export const BellIcon = styled(Notifications)`${iconCss}`;
export const EmailIcon = styled(Email)`${iconCss}`;