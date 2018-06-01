export const FETCH_COIN_DETAILS = 'FETCH_COIN_DETAILS'

export const fetchCoinDetails = (resource, data) => ({
  type: FETCH_COIN_DETAILS,
  payload: { data },
  meta: {
    resource,
    thunk: `${resource}Create`,
  },
})
