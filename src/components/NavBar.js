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

  render() {
    console.log(this.state.search)
    return <>
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
        <Link to={{ pathname: '/search', state: this.state.search }}>submit</Link>
      </div>
    </>
  }

}

export default withRouter(NavBar)