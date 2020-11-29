export const GET_CAKES = 'GET_CAKES'
export const GET_CAKES_SUCCESS = 'GET_CAKES_SUCCESS'
export const GET_CAKES_FAIL = 'GET_CAKES_FAIL'

export const ADD_CAKE = 'ADD_CAKE'
export const REMOVE_CAKE = 'REMOVE_CAKE'

export const ADD_QTY = 'ADD_QTY'

export type CakesActions = 
  | GetCakesAction
  | GetCakesSuccessAction
  | GetCakesFailAction

export type CakesState = {
  cakes: any[]
  loading: boolean
  error: any
}

export type GetCakesAction = {
  type: typeof GET_CAKES
}

export type GetCakesSuccessAction = {
  type: typeof GET_CAKES_SUCCESS
  payload: {
    cakes: any
  }
}

export type GetCakesFailAction = {
  type: typeof GET_CAKES_FAIL
  payload: {
    error: any
  }
}

export type Cake = {
  _id: any
  name: string
  incredients: any[]
  layers: number
  price: number
  image: string
  description: string
  stock: number
  rating: number
  numReviews: number
  qty: number
}

export type CakeState = {
  inCart: Cake[]
}

export type RemoveCakeAction = {
  type: typeof REMOVE_CAKE
  payload: {
    cake: Cake
  }
}

export type AddCakeAction = {
  type: typeof ADD_CAKE
  payload: {
    cake: Cake,
  }
}

export type AddQuantityAction = {
  type: typeof ADD_QTY
  payload: {
    cake: Cake
    id: string
    qty: number
  }
}

// Use this union in reducer
export type CakeActions =
  AddCakeAction | RemoveCakeAction | AddQuantityAction

export type AppState = {
  allCakes: CakesState 
  cake: CakeState
}

export type RatingProps = {
  value: number
  text: string
  color: string
}



