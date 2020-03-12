import React from 'react'
// import NavBar from './NavBar'
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'


class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
      .then(res => {
        this.setState({ data: res.data.tracks.data })
      })
    // .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.data)
    return <section className="section">
      <div className="container">
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
                  <Link to={`https://cors-anywhere.herokuapp.com/api.deezer.com/artist/${track.artist.name}`}>{track.artist.name}</Link>
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
}

export default Home