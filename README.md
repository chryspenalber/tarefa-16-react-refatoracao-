[Versão em Português](#portugues) | [English Version](#english)

---
<a id="portugues"></a>
## Versão em Português

# Catálogo de Produtos — React + CSS-in-JS
**Projeto desenvolvido por Chrys Penalber**

Este repositório contém uma aplicação demonstrativa em **React** que exibe um componente de cartão de produto (`CardProduto`) estilizado com CSS-in-JS (via `styled-components` ou abordagem similar em `src/estilos.js`). O objetivo é apresentar conceitos de componentes, props e estilização dinâmica em React.

---

## Objetivo

- Construir uma interface simples de catálogo de produtos em **React**
- Demonstrar estilização com CSS-in-JS e composição de componentes
- Aplicar interações básicas em JavaScript (ex.: alterar estado ao adicionar ao carrinho)

---

## Links

-  [**Live Site:**](https://github.com/chryspenalber/tarefa-18-css-in-js)
-  [**Repositório no GitHub:**](https://tarefa-16-react-refatoracao-3rfh.vercel.app/)

---

## Estrutura de Arquivos

```text
projeto
|-- index.html
|-- package.json
|-- vite.config.js
`-- src
    |-- main.jsx
    |-- App.jsx
    |-- estilos.js
    `-- components
        `-- CardProduto.jsx
```

---

## Estilos e CSS-in-JS

- Estilização centralizada em `src/estilos.js` para estilos globais e variáveis de tema
- Componentes com estilos locais em `src/components/CardProduto.jsx` usando template literals
- Uso de props para alterar estilos dinamicamente (ex.: botão que muda de cor quando o produto é adicionado)

---

## Responsividade

O layout é simples, mas pensado para funcionar bem em diferentes tamanhos de tela usando técnicas CSS modernas (flexbox e medidas responsivas). Ajustes adicionais podem ser feitos em `src/estilos.js` conforme necessário.

---

## Tecnologias Utilizadas

- **React** - Biblioteca para construção de UI
- **Vite** - Ferramenta de build e dev server
- **JavaScript (ES6+)** - Lógica e interações
- **CSS-in-JS** (`styled-components` ou abordagem similar) - Estilização dos componentes

---

## Como executar o projeto

1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o endereço fornecido pelo Vite (normalmente `http://localhost:5173`).

---

## Autora

- GitHub - [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn - [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

---

<a id="english"></a>
## English Version

# Product Catalog — React + CSS-in-JS
**Project developed by Chrys Penalber**

This repository contains a small React demo that renders a `CardProduto` (product card) component styled with CSS-in-JS (via `styled-components` or a similar approach in `src/estilos.js`). The goal is to demonstrate component composition, prop-driven styling, and simple interactivity.

---

## Project Goal

- Build a simple product catalog UI using **React**
- Showcase CSS-in-JS styling and component composition
- Implement basic interactions (e.g., toggle "added to cart" state)

---

## Links

-  [**Live Site:**](https://github.com/chryspenalber/tarefa-18-css-in-js)
-  [**GitHub Repository:**](https://tarefa-16-react-refatoracao-3rfh.vercel.app/)

---

## File Structure

```text
project
|-- index.html
|-- package.json
|-- vite.config.js
`-- src
    |-- main.jsx
    |-- App.jsx
    |-- estilos.js
    `-- components
        `-- CardProduto.jsx
```

---

## Styles and CSS-in-JS

- Global styles and theme variables live in `src/estilos.js`
- Component-scoped styles are defined in `src/components/CardProduto.jsx` using template literals
- Props drive dynamic styling (e.g., button color changes when a product is added)

---

## Responsiveness

The UI is simple and built to adapt across common screen sizes using modern CSS techniques (flexbox and responsive units). Further responsive tweaks can be applied in `src/estilos.js`.

---

## Technologies Used

- **React** - UI library
- **Vite** - Dev server & build tool
- **JavaScript (ES6+)** - App logic
- **CSS-in-JS** (`styled-components` or similar) - Component styling

---

## How to Run

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the address provided by Vite (usually `http://localhost:5173`).

---

## Author

- GitHub - [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn - [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)