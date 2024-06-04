import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAoFavoritos: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      console.log(state)
      if (
        state.itens.find(
          (produtoNoFavorito) => produtoNoFavorito.id === produto.id
        )
      ) {
        return {
          ...state,
          itens: state.itens.filter(
            (produtoNoFavorito) => produtoNoFavorito.id !== produto.id
          )
        }
      } else {
        return {
          ...state,
          itens: [...state.itens, produto]
        }
      }
    }
  }
})

export const { adicionarAoFavoritos } = favoritosSlice.actions

export default favoritosSlice.reducer
