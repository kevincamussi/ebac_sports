import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { adicionarAoCarrinho } from '../../store/reducers/carrinho'
import { adicionarAoFavoritos } from '../../store/reducers/favoritos'

import { RootReducer } from '../../store'
import { useState } from 'react'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const [textoBotao, setTextoBotao] = useState(true)

  const teste = () => {
    dispatch(adicionarAoFavoritos(produto))
    setTextoBotao(!textoBotao)
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>

      <S.BtnComprar type="button" onClick={teste}>
        {textoBotao ? '+ Adicionar aos favoritos' : '- Remover dos favoritos'}
      </S.BtnComprar>

      <S.BtnComprar
        onClick={() => dispatch(adicionarAoCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
