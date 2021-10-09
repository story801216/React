import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Android from './pages/sub-product/Android'
import Apple from './pages/sub-product/Apple'
import User from './pages/User'

function App() {
  // 指示會員是否登入，true = 登入
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
      {/* link是用來代替a的元件，因為a連結元件會導致頁面刷新，而讓應用程式失常 */}
        <h2>Link元件</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/user">User</Link>
        <h2>a標籤+href</h2>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/product">Product</a>
        <a href="/user">User</a>

        <Switch>
          {/* 路徑愈長往愈上面放 */}
          <Route path="/product/apple">
            <Apple />
          </Route>
          <Route path="/product/android">
            <Android />
          </Route>
          <Route path="/product">
            <Product auth={auth} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User auth={auth} setAuth={setAuth} />
          </Route>
          {/* exact path:精確-必須完全相符合才可以，並且"/"的路由必須放在所有路由的最後面，不然放第一個下面的路由都會無效，因為只會匹配到第一個 */}
          <Route exact path="/"> 
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
