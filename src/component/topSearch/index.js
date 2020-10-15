import React, { useState, useEffect } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { axios, api } from '../../ajax'

function TopSearch () {
  let [total, setTotal] = useState(0)

  useEffect(() => {
    (async () => {
      let data = await axios.get(api.TOTAL_API)
      setTotal(data.data.data)
    })()
  }, [])

  return (
    <div className="top-search">
      <SearchOutlined style={{ fontSize: '16px' }} />
      <span>全部商品，共 {total} 件好物</span>
    </div>
  )
}

export default TopSearch
