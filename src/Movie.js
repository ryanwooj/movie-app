import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({title, poster}) => (
  <div>
    <MoviePoster poster={poster} />
    <h1>{title}</h1>
  </div>
);

const MoviePoster = ({poster}) => (
  <img src={poster} alt="Movie Poster"/>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

export default Movie;
