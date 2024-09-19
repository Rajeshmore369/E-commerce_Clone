import React from 'react'
import "./App.css"
import Home from "./Home.js"
import Header from './Header'
import Checkout from './Checkout.js'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
function App() {
  return (
  <Router>
    <div className='app'>
      <Header />
      <Switch>
        <Route path="/checkout">
          
          <Checkout/>
        </Route>
        <Route path="/" element={<Home/>}>
          
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App