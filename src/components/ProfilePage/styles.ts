import styled, { css } from "styled-components";

import { LocationOn, Cake } from '../../styles/Icons';
import Button from "../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto; /* Aqui eu to dizendo que quando a tela ficar muito grande que comece o scrollbar */

  scrollbar-width: none; /* Configuração para Firefox */
  ::-webkit-scrollbar- { /* Configuração para Chrome */
    display: none;
  }

`;
export const Banner = styled.div`
  flex-shrink : 0; /* Pra não deixar o banner diminuir de tamanho como se fosse encolher */

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);

  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute; /* Nesse caso só vai funcionar pq o elemento pai está com o position relative */
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw +7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray)
  }
  > p {
    font-size: 15px;
    margin-top:11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right:7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 300px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }

`;


const iconCss = css`
  width: 20px;
  height: 20px;
`;

export const LocationIcon = styled(LocationOn)`${iconCss}`;

export const CakeIcon = styled(Cake)`${iconCss}`; 

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);    

    & + span {
    margin-left: 20px;
    }
  }
`;