import React from 'react'


const MovieItem = ({movie,deleteMovie,handleFavorite}) => {
  return (
    <div className='movie-item'>
        <span  >{movie.title}</span>
        <button  onClick={() => handleFavorite(movie.id)}>{movie.isFavorite? 'Unfavorite': 'Favorite'}</button>
        <button  onClick={()=> deleteMovie(movie.id)}  >Remove</button>
    </div> 
  
)
}


export default MovieItem