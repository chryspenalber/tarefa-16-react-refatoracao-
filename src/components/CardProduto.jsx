import styled from 'styled-components';

const CardProdutoContainer = styled.article`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  display: grid;
  gap: 0.75rem;
`;

const CardProdutoNome = styled.h2`
  margin: 0;
  font-size: 1.15rem;
`;

const CardProdutoPreco = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #2563eb;
  font-weight: 700;
`;

const CardProdutoBotaoCarrinho = styled.button`
  border: 0;
  border-radius: 10px;
  padding: 0.7rem 0.95rem;
  font-weight: 600;
  cursor: pointer;
  background: ${({ $adicionado }) => ($adicionado ? '#198754' : '#6c757d')};
  color: #ffffff;
`;

export function CardProduto({
  nome,
  preco,
  adicionado = false,
  onAdicionarAoCarrinho,
}) {
  return (
    <CardProdutoContainer>
      <CardProdutoNome>{nome}</CardProdutoNome>
      <CardProdutoPreco>R$ {preco.toFixed(2)}</CardProdutoPreco>
      <CardProdutoBotaoCarrinho
        type="button"
        $adicionado={adicionado}
        onClick={onAdicionarAoCarrinho}
      >
        {adicionado ? 'Adicionado' : 'Adicionar ao carrinho'}
      </CardProdutoBotaoCarrinho>
    </CardProdutoContainer>
  );
}
