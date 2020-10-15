import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Tabs from './component/tabs'
import './assets/css/app/app.scss'

const Home = lazy(() => import('./pages/home'))
const Cart = lazy(() => import('./pages/cart'))
const Category = lazy(() => import('./pages/category'))
const Mine = lazy(() => import('./pages/mine'))
const Topic = lazy(() => import('./pages/topic'))

function App () {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>...</div>}>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/category' component={Category} />
            <Route path='/cart' component={Cart} />
            <Route path='/topic' component={Topic} />
            <Route path='/mine' component={Mine} />
            <Route render={() => <Redirect to='/home' />} />
          </Switch>
        </Suspense>

        <Tabs />

      </Router>
    </div>
  )
}

export default App;
