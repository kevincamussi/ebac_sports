import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (
        state.itens.find(
          (produtoNoCarrinho) => produtoNoCarrinho.id === produto.id
        )
      ) {
        alert('Item já adicionado')
      } else {
        return {
          ...state,
          itens: [...state.itens, produto]
        }
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer
