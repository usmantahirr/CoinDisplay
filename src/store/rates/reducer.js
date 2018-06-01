import { FETCH_COIN_DETAILS } from './actions'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COIN_DETAILS:
      return {
        ...state,
        payload,
      }

    default:
      return state
  }
}
