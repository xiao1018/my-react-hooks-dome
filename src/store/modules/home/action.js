import { axios, api } from '../../../ajax'
import { SET_MENU_DATA } from './actionType'

export const getMenuData = () => (
  async (dispatch) => {
    const data = await axios.get(api.HOME_MENU_API)
    const newData = data.data.data.cateList.map(({ id, name }) => ({ id, name }))
    dispatch({
      type: SET_MENU_DATA,
      data: newData
    })
  }
)