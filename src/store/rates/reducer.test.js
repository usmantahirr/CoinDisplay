import * as actions from './actions'
import reducer from './reducer'

const initialState = { data: [], isLoading: false }

const action = (type, payload, meta) => ({
  type,
  payload,
  meta: {
    resource: 'resources',
    ...meta,
  },
})

const state = resourceState => ({
  ...initialState,
  data: resourceState,
})

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

describe('FETCH_RATE_HISTORY_SUCCESS', () => {
  it('adds the new data to the initial state', () => {
    expect(reducer(
      initialState,
      action(actions.FETCH_RATE_HISTORY_SUCCESS, [])
    )).toEqual(state([]))
  })

  it('prepends the new data to an existing state', () => {
    expect(reducer(
      state([]),
      action(actions.FETCH_RATE_HISTORY_SUCCESS, [1, 2])
    )).toEqual(state([1, 2]))
  })
})

describe('FETCH_RATE_HISTORY', () => {
  it('keeps the list initial state', () => {
    expect(reducer(
      {},
      action(actions.FETCH_RATE_HISTORY)
    )).toEqual({ isLoading: true, query: undefined })
  })
})
