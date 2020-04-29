import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// import Home from './Home'
// import NavBar from './NavBar'

class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    console.log(this.props)
    axios.get(`https://cors-anywhere.herokuapp.com/api.deezer.com/search?q=${this.props.location.state}`)
      .then(res => {
        this.setState({ data: res.data.data })
      })
      .catch(err => console.log(err))

  }

  console.log(this.props.location.state)
  render() {

    return <section className="section">

      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.data.map((track, key) => {
            console.log(this.artist.id)
            return <div key={key} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
              <div className="card">
                <div className="album-cover">
                  <figure className="image is-4by3">
                    <img src={track.album.cover_medium} alt={track.artist.name} />
                  </figure>
                  {track.data} 
                </div>
                {/* <div className="card-content">
                  {track.artist.name}
                </div> */}
                <div className="card-artist-name">
                  <Link to={`/artist/${track.artist.id}`}>{track.artist.name}</Link>
                </div>
                <div className="card-content">
                  <p>{track.title}</p>
                </div>
                <audio className="playPreview"
                  src={track.preview}
                  controls
                />
              </div>
            </div>
          })
          }
        </div>
      </div>
    </section>
  }

  // handleSubmit(event) {
  //   console.log(event.target.value)
  //   const searchInput = event.target.value
  //   this.setState = { searchInput }
  // }

  // componentDidMount() {
  //   axios.get(`https://api.deezer.com/search?q=${searchInput}`)
  //     .then(res => {
  //       this.setState({

  // render() {
  //   return <Navbar 
  //   searchInput={this.state.searchInput}
  //   onSubmit={(event) => this.handleSubmit(event)} 
  // }

}


export default Search