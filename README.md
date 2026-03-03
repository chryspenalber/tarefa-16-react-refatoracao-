# Catálogo de Produtos em React

Aplicação React simples que exibe um componente `CardProduto` que altera ao clicar em "Adicionar ao Carrinho".

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Styled Components (CSS-in-JS)

## Funcionalidades

- Exibição de um produto com:
  - Nome
  - Preço
  - Botão **"Adicionar ao carrinho"**
- Estilização dinâmica do botão com base na prop `adicionado`:
  - `true` → verde (`#198754`)
  - `false` → cinza (`#6c757d`)

## Estrutura de estilos

- Os estilos globais e de layout ficam em `src/estilos.js`.
- Os estilos específicos do `CardProduto` ficam no próprio componente em `src/components/CardProduto.jsx` usando `styled-components` com template literals.

## Como executar o projeto

```bash
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite (geralmente `http://localhost:5173`).