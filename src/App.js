import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import GitHubCalendar from 'github-calendar';

class App extends Component {

  componentDidMount = () => {
    setTimeout(() => {
      this._getMovies()
    }, 1100)
    // this._getMovies() for enough loading time
  }

// Async await do callApi. This method preferred
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) => {
      return <Movie
        title={movie.title}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        rank={index}
        rating={movie.rating}
        >
        <script
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossorigin="anonymous">
        </script>
      </Movie>
    })
    return movies
  }

  render() {
    const { movies } = this.state;
    new GitHubCalendar('.calendar', 'ryanwooj')
    return (
      <div className={movies ? "App" : "lds"}>
        {movies ? this._renderMovies() : <div className="lds-facebook"><div></div><div></div><div></div></div>}
      </div>
    );
  }
}

export default App;
