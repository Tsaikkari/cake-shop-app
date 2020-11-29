import { put, all, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import  { getCakesSuccess }  from '../redux/actions/cakesActions'

function* fetchCakesSaga() {
  try {
    const res = yield axios.get('/api/v1/cakes')
    yield put(getCakesSuccess(res.data))
  } catch (error) {
    console.log(error)
  }
}

function* saveState() {
  const state = yield select()
  yield localStorage.setItem('initState', JSON.stringify(state))
}

const sagaWatcher = [
  takeLatest('GET_CAKES', fetchCakesSaga),
  takeLatest('*', saveState)
]

export default function* rootSaga() {
  yield all([...sagaWatcher])
}