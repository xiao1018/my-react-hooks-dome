import React from 'react'
import TopSearch from '../../../component/topSearch'

function header () {
  return (
    <div className='header'>
      <h1 className="logo">网易严选</h1>
      <TopSearch />
      <button className="login">登入</button>
    </div>
  )
}

export default header
