import {
  GET_CAKES,
  GET_CAKES_SUCCESS,
  GET_CAKES_FAIL,
} from '../../types'

export const wantCakes = () => {
  return {
    type: GET_CAKES,
  }
}

export const getCakesSuccess = (cakes: any) => {
  return {
    type: GET_CAKES_SUCCESS,
    payload: cakes,
  }
}

export const getCakesFail = () => {
  return {
    type: GET_CAKES_FAIL,
  }
}

