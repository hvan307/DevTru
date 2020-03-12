import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import MetisMenu from 'react-metismenu'
import Search from './Search'

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
    console.log(this.state.search)
    return <form onSubmit={(event) => this.handleSubmit(event)}>
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
  }

}

export default withRouter(NavBar)