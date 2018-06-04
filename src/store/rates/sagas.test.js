import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

const api = {
  post: () => {},
  get: () => {},
  put: () => {},
  delete: () => {},
  setToken: () => {},
}

const thunk = '123'
const resource = 'resources'
const meta = { thunk, resource }

describe('fetchRateHistory', () => {
  const payload = { period_id: 'foo' }

  it('calls success', () => {
    const detail = 'detail'
    const generator = sagas.fetchRateHistory(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], `/${resource}?period_id=foo`))
    expect(generator.next(detail).value)
      .toEqual(put(actions.fetchRateHistorySuccess(resource, detail, { data: payload }, thunk)))
  })

  it('calls failure', () => {
    const generator = sagas.fetchRateHistory(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], `/${resource}?period_id=foo`))
    expect(generator.throw('test').value)
      .toEqual(put(actions.fetchRateHistoryFail(resource, 'test', { data: payload }, thunk)))
  })
})

test('watchFetchCoinRateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchFetchCoinRateRequest(api, { payload, meta })
  expect(generator.next().value)
    .toEqual(call(sagas.fetchRateHistory, api, payload, meta))
})

test('saga', () => {
  const generator = saga({ api })
  expect(generator.next().value).toEqual(takeEvery(actions.FETCH_RATE_HISTORY, sagas.watchFetchCoinRateRequest, api))
})
