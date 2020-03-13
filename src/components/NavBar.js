import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import logo from '../styles/images/IMGBIN_sound-loudness-png_Tn0RjnUj.png'

// import LinearGradient from 'react-native-linear-gradient'
// import MetisMenu from 'react-metismenu'
// import Search from './Search'

// const NavBar = props => {
//   return <header>
//     <nav>
//       div
//     </nav>
//   </header>
// }


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
    this.props.history.push('/search', this.state.search)
    location.reload()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navMobileOpen: false })
    }
  }

  render() {
    return <nav className="navbar is-transparent">
      {/* <LinearGradient
        colors={['#448AFF', '#9E9E9E', '#FFEB3B', '#FF5722']}
        style={{ flex: 1 }}
      > */}
      <div className="navbar-brand">
        <Link className="navbar-item is-transparent" to="/">

          <img src={logo} width="112" height="28" />

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

      <div className={`navbar-menu is-transparent ${this.state.navMobileOpen ? 'is-active' : ''}`}>
        <div className="navbar-start is-transparent">
          <Link className="navbar-item is-transparent" id="home-button" style={{ color: 'black' }} to="/">Home</Link>
          <Link className="navbar-item is-transparent" id="charts-button" style={{ color: 'black' }} to="/charts">Charts</Link>


          <div className="navbar-item">
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div className="control is-expanded">
                <input
                  onChange={(event) => this.handleChange(event)}
                  // onSubmit={(event => this.handleSubmit(event))}
                  className="input is-medium"
                  type="search"
                  placeholder="Artist, Album, Song"
                  value={this.state.search}
                />
              </div>
              <div className="control">
                {/* <button type="submit"></button> */}
                {/* <Link to={{ pathname: '/search', state: this.state.search }}>submit</Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </LinearGradient> */}
    </nav >

  }

}

export default withRouter(NavBar)