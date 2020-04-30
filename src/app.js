import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Search from './components/Search'
import Charts from './components/Charts' 
import SingleArtist from './components/SingleArtist'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/artist/:id" component={SingleArtist}/>
      <Route path="/search" component={Search} />
      <Route path="/charts" component={Charts} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)