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
  <BrowserRouter basename="/DevTru">
    <NavBar />
    <Switch>
      <Route exact path="/artist/:id" component={SingleArtist}/>
      <Route path="/search/:search" component={Search} />
      <Route path="/charts" component={Charts} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)