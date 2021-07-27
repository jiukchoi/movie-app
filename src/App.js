import React from 'react'
import Home from './routes/home'
import About from './routes/about'
import Detail from './components/details'
import { HashRouter, Route } from 'react-router-dom'
import Navigation from './components/navigation'

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' exact={true} component={About} />
      <Route path='/movie/:id' exact={true} component={Detail} />
    </HashRouter>
  )
}

export default App