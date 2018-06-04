export const FETCH_RATE_HISTORY = 'FETCH_RATE_HISTORY'
export const FETCH_RATE_HISTORY_SUCCESS = 'FETCH_RATE_HISTORY_SUCCESS'
export const FETCH_RATE_HISTORY_FAIL = 'FETCH_RATE_HISTORY_FAIL'

export const fetchRateHistory = (resource, data) => {
  return {
    type: FETCH_RATE_HISTORY,
    payload: data,
    meta: {
      resource,
      thunk: `${resource}Create`,
    },
  }
}

export const fetchRateHistorySuccess = (resource, rates, request, thunk) => {
  return {
    type: FETCH_RATE_HISTORY_SUCCESS,
    payload: rates,
    meta: {
      resource,
      request,
      thunk,
    },
  }
}

export const fetchRateHistoryFail = (resource, error, request, thunk) => {
  return {
    type: FETCH_RATE_HISTORY_FAIL,
    error: true,
    payload: error,
    meta: {
      resource,
      request,
      thunk,
    },
  }
}
