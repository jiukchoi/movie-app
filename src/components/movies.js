import React from 'react'
import PropTypes from 'prop-types'
import './movies.css'
import { Link } from 'react-router-dom'

const Movies = ({id, poster, rating, title, genres}) => {
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        poster,
        rating,
        title,
        genres,
        id,
      }
    }}>
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <div className="movie__title text__margin">{title}</div>
          <ul className="genres text__margin">
            {genres.map((v, i) => (
              <li key={i} className="genres__genre">
                {v}
              </li>
            ))}
          </ul>
          <div className="movie__rating">{rating}</div>
        </div>
      </div>
    </Link>
  )
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movies