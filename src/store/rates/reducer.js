import {
  FETCH_COIN_DETAILS,
  FETCH_RATE_HISTORY,
  FETCH_RATE_HISTORY_SUCCESS,
  FETCH_RATE_HISTORY_FAIL,
} from './actions'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_RATE_HISTORY:
      return {
        ...state,
        ...payload,
      }
    case FETCH_RATE_HISTORY_SUCCESS:
      return {
        ...state,
        ...payload,
      }
    case FETCH_RATE_HISTORY_FAIL:
      return {
        ...state,
        error: {
          message: 'Cant Fetch API',
          status: '400'
        }
      }

    default:
      return state
  }
}
