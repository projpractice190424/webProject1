import React from 'react'

class MovieRow extends React.Component {
    // console.log(this.props.movie.id)
    viewMovie() {
        console.log("loaded viewMovie")
        const urlString = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = urlString
    }

    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="100" src={this.props.movie.poster_src} onError={(e) => { this.props.movie.poster_src = { uri: 'https://firebasestorage.googleapis.com/v0/b/practice-e2c88.appspot.com/o/snapshot%2F2017-04-09T15%3A02%3A23Z.png?alt=media&token=0b94d2dd-0e8e-4fae-a595-9a09424f1342' }}} />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input type="button"value="View" onClick={this.viewMovie.bind(this)}/>
            </td>
          </tr>
        </tbody>
    </table>
    }
}

export default MovieRow 