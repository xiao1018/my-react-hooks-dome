import { SET_MENU_DATA } from './actionType'

const initialState = {
  menuList: []
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_DATA:
      return { ...state, menuList: [{ id: 'tuijian', name: '推荐' }, ...action.data] }
    default:
      return state
  }
}

export default home
