import { CardProduto } from './components/CardProduto';
import { Container, Pagina, Titulo } from './estilos';

const produto = {
  nome: 'Air Fryer Electrolux ',
  preco: 859.90,
  adicionado: true,
};

function App() {
  return (
    <Pagina>
      <Container>
        <Titulo>Produto</Titulo>
        <CardProduto
          nome={produto.nome}
          preco={produto.preco}
          adicionado={produto.adicionado}
        />
      </Container>
    </Pagina>
  );
}

export default App;
