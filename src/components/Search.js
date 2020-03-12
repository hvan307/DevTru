import React from 'react'
import axios from 'axios'
// import NavBar from './NavBar'

class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      data: [],
      searchInput: ''
    }
  }

  handleChange(event) {
    const userInput = event.target.value
    this.setState({ searchInput: userInput })
    console.log(this.state.searchInput)
  }

  handleSubmit(event) {
    if (!this.state.searchInput) {
      return null
    }
    console.log('hello')
    event.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/api.deezer.com/search?q=${this.state.searchInput}`)
      .then((res) => {
        this.setState({ data: res.data.data })
        console.log(this.state.data)
      })
      .catch(err => console.log(err))

  }

 
  render() {
    return <section className="section">
      <div className="container">
        <form className="field has-addons">
          <div className="control is-expanded">
            <input
              onChange={(event) => this.handleChange(event)}
              // onSubmit={(event => this.handleSubmit(event))}
              className="input is-medium"
              type="search"
              placeholder="Artist, Album, Song"
              value={this.state.searchInput}
            />
          </div>
          <div className="control">
            <button type="submit"
              onClick={(event) => this.handleSubmit(event)}
              // onKeyPress={(event) => this.handleKeyPress(event)}
              className="button is-info is-medium">Search
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {/* <NavBar handleSubmit={(event => this.handleSubmit(event))}/> */}
        <div className="columns is-mobile is-multiline">
          {this.state.data.map(track => {
            return <div key={track.id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
              <div className="card">
                <div className="album-cover">
                  <figure className="image is-4by3">
                    <img src={track.album.cover_medium} alt={track.artist.name} />
                  </figure>
                  {track.data}
                </div>
                <div className="card-content">
                  {track.artist.name}
                </div>
                <div className="card-content">
                  <p>{track.title}</p>
                </div>
                {/* <figure className="playPreview"> */}
                {/* <ReactAudioPlayer
                  src={track.preview}
                  controls
                /> */}
                {/* </figure> */}
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