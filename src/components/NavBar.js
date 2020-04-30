import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import logo from '../styles/images/IMGBIN_sound-loudness-png_Tn0RjnUj.png'

class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      search: '',
      navMobileOpen: false
    }
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.history.push('/DevTru/search', this.state.search)
    location.reload()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navMobileOpen: false })
    }
  }

  render() {
    return <nav className="navbar is-transparent">
      <div className="navbar-brand is-transparent">
        <Link className="navbar-item is-transparent" to="/">
          <img src={logo} alt='logo' width="112" height="28" />
        </Link>
        <a
          role="button"
          className={`navbar-burger burger is-transparent ${this.state.navMobileOpen ? 'is-active' : ''}`} aria-label="menu"
          aria-expanded="false"
          onClick={() => this.setState({ navMobileOpen: !this.state.navMobileOpen })}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${this.state.navMobileOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link className="navbar-item" id="home-button" style={{ color: 'black' }} to="/">Home</Link>
          <Link className="navbar-item" id="charts-button" style={{ color: 'black' }} to="/charts">Charts</Link>


          <div className="navbar-item">
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div className="control is-expanded">
                <input
                  onChange={(event) => this.handleChange(event)}
                  className="input is-medium"
                  type="search"
                  placeholder="Artist, Album, Song"
                  value={this.state.search}
                />
              </div>
              <div className="control">
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav >

  }

}

export default withRouter(NavBar)