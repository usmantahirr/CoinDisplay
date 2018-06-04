import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'

export function* fetchRateHistory(api, data, { resource, thunk }) {
  try {
    api.setToken('90E70A51-A3F7-4193-85F8-819BD0999527')
    let url = `/${resource}?period_id=${data.period_id}`
    url += (data.limit) ? `&limit=${data.limit}` : ''
    const user = yield call([api, api.get], url)
    yield put(actions.fetchRateHistorySuccess(resource, user, { data }, thunk))
  } catch (error) {
    yield put(actions.fetchRateHistoryFail(resource, error, { data }, thunk))
  }
}

export function* watchFetchCoinRateRequest(api, { payload, meta }) {
  yield call(fetchRateHistory, api, payload, meta)
}

export default function* ({ api }) {
  yield takeEvery(actions.FETCH_RATE_HISTORY, watchFetchCoinRateRequest, api)
}
