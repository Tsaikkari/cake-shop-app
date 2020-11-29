import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import CakesScreen from './screens/CakesScreen'
import CakeScreen from './screens/CakeScreen'
import CartScreen from './screens/CartScreen'
import ShippingScreen from './screens/ShippingScreen'

const App = () => {
  const [background, setBackground] = useState('-webkit-radial-gradient(#5de8b2, #89face)')

  const changeBg = (background: string) => {
    setBackground(background)
  }
  
  return (
    <div style={{background: background}} id="main">
      <Router>
        <Header changeBg={changeBg} />
        <main className="py-3">
          <Container>
            <Route path='/shipping' component={ShippingScreen} /> 
            <Route path='/login' component={LoginScreen} /> 
            <Route path='/cakes' component={CakesScreen} />
            <Route path='/cake/:id' component={CakeScreen} />
            <Route path='/shoppingcart/:id?' component={CartScreen} />
            <Route path='/' component={HomeScreen} exact />
          </Container>
        </main>
        <Footer/>
      </Router>
    </div>
  )
}

export default App