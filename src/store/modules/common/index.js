import { SET_TOTAL_DATA } from './actionType'

const initialState = {
  total: 0
}

const common = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_DATA:
      return { ...state, total: action.data }
    default:
      return state
  }
}

export default common
