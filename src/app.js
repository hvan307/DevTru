import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

import Home from './components/Home'
// import NavBar from './components/NavBar'
import Search from './components/Search'
// import Charts from './components/Charts' 

const App = () => (
  <BrowserRouter>
    {/* <NavBar /> */}
    <Search />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search?q=" component={Search} />
      {/* <Route path="/charts" component={Charts} /> */}
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)