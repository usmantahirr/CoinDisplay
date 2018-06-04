import * as actions from './actions'

test('fetchRateHistory', () => {
  expect(actions.fetchRateHistory('resources', { title: 'test' }))
    .toEqual(expect.objectContaining({
      type: actions.FETCH_RATE_HISTORY,
      payload: {
        title: 'test',
      },
      meta: expect.objectContaining({
        resource: 'resources',
      }),
    }))
})

test('fetchRateHistorySuccess', () => {
  expect(actions.fetchRateHistorySuccess('resources', { id: 1, title: 'test' }, 'request'))
    .toEqual(expect.objectContaining({
      type: actions.FETCH_RATE_HISTORY_SUCCESS,
      payload: { id: 1, title: 'test' },
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})

test('fetchRateHistoryFail', () => {
  expect(actions.fetchRateHistoryFail('resources', 'error', 'request'))
    .toEqual(expect.objectContaining({
      type: actions.FETCH_RATE_HISTORY_FAIL,
      error: true,
      payload: 'error',
      meta: expect.objectContaining({
        request: 'request',
        resource: 'resources',
      }),
    }))
})
