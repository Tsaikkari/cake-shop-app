import {
  CakeState,
  CakeActions,
  ADD_CAKE,
  REMOVE_CAKE,
  ADD_QTY,
  Cake
} from '../../types'

export const cakeReducer = (
  state: CakeState = {
    inCart: [],
  },
  action: CakeActions
): CakeState => {
  switch (action.type) {
    case ADD_CAKE: {
       const cake = action.payload.cake
       if (state.inCart.find((x: any) => x.name === cake.name)) {
         return state
       }
      cake.qty = 1

        return {
          ...state,
          inCart: [...state.inCart, cake]
        }
    }
    case REMOVE_CAKE: {
      const item = action.payload
      console.log(item)
      const cakeIndex = state.inCart.findIndex((c) => c._id === item)
      const cartCopy = [...state.inCart]

      if (cakeIndex !== -1) {
        cartCopy.splice(cakeIndex, 1)
        return {
          inCart: cartCopy,
        }
      }
      return state
    }
    case ADD_QTY: {
      const { id, qty } = action.payload
      
      const copyCart = [...state.inCart]
      const cake = copyCart.find(cake => cake._id === id) as Cake
      cake.qty = qty
    
      return {
        inCart: copyCart,
      }
    }
    default:
      return state
  }
}




