import { useState } from 'react';
import { CardProduto } from './components/CardProduto';
import { Container, Pagina, Titulo } from './estilos';

const produto = {
  nome: 'Air Fryer Electrolux ',
  preco: 859.90,
};

function App() {
  const [adicionado, setAdicionado] = useState(false);

  function adicionarAoCarrinho() {
    setAdicionado(true);
  }

  return (
    <Pagina>
      <Container>
        <Titulo>Produto</Titulo>
        <CardProduto
          nome={produto.nome}
          preco={produto.preco}
          adicionado={adicionado}
          onAdicionarAoCarrinho={adicionarAoCarrinho}
        />
      </Container>
    </Pagina>
  );
}

export default App;
