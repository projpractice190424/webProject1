import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.performSearch()
  }

  performSearch(searchTerm) {
    console.log('Perform Search function')
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=24cfbd59fbd336bfd1a218ec40733d66&language=en-US&page=1&include_adult=false&query=" + searchTerm
    

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        // fetch list of movies 
        const results = searchResults.results
        // movie array
        var movieRows = []

        results.forEach( (movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          
          movieRows.push(movieRow)
        })
       
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log("failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titleBar"> 
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="icon.jpg" />
              </td>
              <td width="8" />
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width:"99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term" />


         {this.state.rows}

      </div>
    );
  }
}

export default App;
