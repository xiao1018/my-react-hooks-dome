import { axios, api } from '../../../ajax'
import { SET_TOTAL_DATA } from './actionType'

// 获取全部商品数量
export const getTotalData = () => (
  async (dispatch) => {
    const data = await axios.get(api.TOTAL_API)
    const newData = data.data.data
    dispatch({
      type: SET_TOTAL_DATA,
      data: newData
    })
  }
)
