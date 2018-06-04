import {
  FETCH_COIN_DETAILS,
  FETCH_RATE_HISTORY,
  FETCH_RATE_HISTORY_SUCCESS,
  FETCH_RATE_HISTORY_FAIL,
} from './actions'

const initialState = {
  query: {},
  isLoading: false,
  data: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_RATE_HISTORY:
      return {
        ...state,
        isLoading: true,
        query: payload,
      }
    case FETCH_RATE_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      }
    case FETCH_RATE_HISTORY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: {
          message: payload.message,
          status: '400'
        }
      }

    default:
      return state
  }
}
