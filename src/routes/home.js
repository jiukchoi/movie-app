import React from 'react';
import axios from 'axios';
import Movies from '../components/movies';
import './home.css'

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.setState({movies, isLoading: false})
  }

  componentDidMount() {
    this.getMovies();
  }
  
  render() {
    const {isLoading, movies} = this.state
    return (
      <section className='container'>
        { isLoading ? (
          <div className='loader'>
            <span className='loader__text'>Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((v, i) => (
              <Movies
                key={i}
                title={v.title}
                id={v.id}
                poster={v.medium_cover_image}
                rating={v.rating}
                genres={v.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default Home