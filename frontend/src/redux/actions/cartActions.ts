import { ADD_QTY } from '../../types'

export const addCakeQty = (id: string, qty: number) => {
  return {
    type: ADD_QTY,
    payload: {
      id, 
      qty,
    }
  }
}