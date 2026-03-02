import styled, { createGlobalStyle } from 'styled-components';

export const EstilosGlobais = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #111827;
    background: #f3f4f6;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
  }
`;

export const Pagina = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1rem;
`;

export const Container = styled.section`
  width: min(100%, 420px);
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 18px 30px -24px rgb(17 24 39 / 0.55);
`;

export const Titulo = styled.h1`
  margin: 0 0 1rem;
  font-size: 1.5rem;
`;




