import React, { useState } from 'react'
import './movie.css'

const MovieInput = ({addMovies}) => {
    const [movie_title , setmovie_title] = useState('')

    const handleSubmit= (e)=> {
        e.preventDefault()
        if (movie_title.trim() !== '') {
            addMovies(movie_title)
            setmovie_title('')
        }
    }

    
  return (
    <div className="movieInput">
      <h3>Add a New Movie</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie_title">Movie Title: </label>
        <input
          type="text"
          required
          placeholder="Type the Movie name"
          value={movie_title}
          onChange={(e) => {
            setmovie_title(e.target.value);
          }}
        />
        <button>Add Movie</button>
      </form>
    </div>
  );
}

export default MovieInput