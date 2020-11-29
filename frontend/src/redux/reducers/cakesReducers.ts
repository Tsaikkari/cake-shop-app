import {
  CakesState,
  CakesActions,
  GET_CAKES,
  GET_CAKES_SUCCESS,
  GET_CAKES_FAIL,
} from '../../types'

export const cakesReducer = (
  state: any = {
    cakes: [],
    loading: false,
    error: null,
  },
  action: CakesActions
): CakesState => {
  switch (action.type) {
    case GET_CAKES:
      return {
        ...state,
        loading: true,
        cakes: [],
      }
    case GET_CAKES_SUCCESS:
      return {
        ...state,
        loading: false,
        cakes: action.payload,
      }
    case GET_CAKES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

