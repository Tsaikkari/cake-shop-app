import {
  ADD_CAKE,
  REMOVE_CAKE,
  ADD_QTY,
} from '../../types'

export const addToShoppingcart = (cake: {}, qty: number) => {
  return {
    type: ADD_CAKE,
    payload: {
      cake,
      qty,
    },
  }
}

export const addCakeQty = (id: string, qty: number) => {
  return {
    type: ADD_QTY,
    payload: {
      id, 
      qty,
    }
  }
}

export const removeFromShoppingcart = (id: string) => (dispatch: any, getState: any) => {
  dispatch({
    type: REMOVE_CAKE,
    payload: id
  })
}





