import React from 'react'
import { Link, withRouter } from 'react-router-dom'
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
      search: ''
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

  render() {
    return <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/charts">Charts</Link>


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

    </nav >

  }

}

export default withRouter(NavBar)