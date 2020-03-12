import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SingleArtist extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
      .then(res => {
        // console.log('Single artist is here')
        // this.props.history.push(`/artist/${id}`)
        // console.log('history props', this.props.history)
        this.setState({ data: res.data })
      })
    // .catch(err => console.log(err))
  }

  render() {
    console.log(this.props)
    const data = this.state.data
    // console.log(this.state.data)
    return <section className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
            <div className="card">
              <div className="album-cover">
                <figure className="image is-4by3">
                  <img src={data.picture_medium} alt={data.name} />
                </figure>
              </div>
              <div className="card-content">
                {data.name}
              </div>
              <div className="card-content">
                <p>Number of albums {data.nb_album} {data.nb_album >= 35 ? 'Blimey!' : ''}</p>
              </div>
              <div className="card-content">
                <p>Tracklist {data.tracklist} </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  }
}

export default SingleArtist