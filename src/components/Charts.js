// import React from 'react'
// // import NavBar from './NavBar'
// import axios from 'axios'
// // import ReactAudioPlayer from 'react-audio-player'


// class Charts extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       data: []
//     }
//   }

//   componentDidMount() {
//     axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
//       .then(res => {
//         this.setState({ data: res.data.tracks.data })
//       })
//     // .catch(err => console.log(err))
//   }

//   render() {
//     console.log(this.state.data)
//     return <section className="section">
//       <div className="container">
//         <div className="columns is-mobile is-multiline">
//           {this.state.data.map(track => {
//             return <div key={track.id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
//               <div className="card">
//                 <div className="album-cover">
//                   <figure className="image is-4by3">
//                     <img src={track.album.cover_medium} alt={track.artist.name} />
//                   </figure>
//                   {track.data}
//                 </div>
//                 <div className="card-content">
//                   {track.artist.name}
//                 </div>
//                 <div className="card-content">
//                   <p>{track.title}</p>
//                 </div>
//                 <audio src={track.preview}></audio>
//                 {/* <figure className="playPreview"> */}
//                 {/* <ReactAudioPlayer
//                   src={track.preview}
//                   controls
//                 /> */}
//                 {/* </figure> */}
//               </div>
//             </div>
//           })
//           }
//         </div>
//       </div>
//     </section>
//   }
// }

// export default Charts