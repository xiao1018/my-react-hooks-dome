import React, { useState, useEffect } from 'react'
import BScroll from 'better-scroll'
import { DownOutlined } from '@ant-design/icons'
import { axios, api } from '../../../ajax'

function Menu () {
  let [selectIndex, setSelectIndex] = useState(0)
  let [isMenuList, setIsMenuList] = useState(false)
  let [menuData, setMenuData] = useState([])

  useEffect(() => {
    (async () => {
      const data = await axios.get(api.HOME_MENU_API)
      const newData = data.data.data.cateList.map(({ id, name }) => ({ id, name }))
      setMenuData(() => {
        return [{ id: 'tuijian', name: '推荐' }, ...newData]
      })
    })()
  }, [])

  useEffect(() => {
    new BScroll('.wrapper', {
      click: true,
      scrollY: false,
      scrollX: true
    })
  }, [])

  /** 点击导航菜单 */
  const menuItemAction = (index) => {
    setSelectIndex(index)
    setIsMenuList(false)
  }
  /** 点击三角按钮 */
  const unfoldMenuListAction = () => {
    setIsMenuList(!isMenuList)
  }

  const menuList = (
    <ul>
      {menuData.map((item, index) => (
        <li
          className={`menu-item ${index === selectIndex ? 'active' : ''}`}
          onClick={() => menuItemAction(index)}
          key={item.id} >{item.name}</li>
      ))}
    </ul>
  )

  return (
    <>
      <div className="menu">
        {isMenuList ?
          <div className="menu-list">
            <div className="menu-title">全部频道</div>
            {menuList}
          </div>
          :
          <div className="nav wrapper">
            <div className="nav-menu">
              {menuList}
            </div>
          </div>
        }

        {/* 三角箭头 */}
        <div className="arrow-click">
          <div></div>
          <div onClick={() => unfoldMenuListAction()}><DownOutlined /></div>
        </div>
      </div >
      {isMenuList && <div className="shade" />}
    </>
  )
}

export default Menu
