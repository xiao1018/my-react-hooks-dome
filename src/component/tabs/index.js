import React from 'react'
import { NavLink } from 'react-router-dom'

function Tabs () {
  const TabData = [
    { title: '首页', id: 'home' },
    { title: '分类', id: 'category' },
    { title: '识物', id: 'topic' },
    { title: '购物车', id: 'cart' },
    { title: '我的', id: 'mine' }
  ]

  return (
    <div className="tabs border-top">
      {  TabData.map(item => {
        return (
          <NavLink key={item.id}
            to={`/${item.id}`}
            className='tab'>{item.title}</NavLink>
        )
      })}
    </div>
  )
}

export default Tabs
