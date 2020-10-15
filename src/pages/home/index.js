import React from 'react'
import '../../assets/css/home/home.scss'
import Header from './children/header'
import Menu from './children/menu'

function home () {
  return (
    <div className="home page">
      <Header />
      <Menu />
    </div>
  )
}

export default home
