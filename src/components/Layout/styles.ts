import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  margin: 0 auto; /* Margem 0 para baixo e pra cima e auto para direita e esquerda */

  display: flex; /* Trabalha os componentes lado a lado | 1, 2, 3 |*/
  justify-content: center; /* Centraliza o conteúdo do layout */

  `;
