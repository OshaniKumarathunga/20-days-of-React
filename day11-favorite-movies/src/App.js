import { useState } from 'react';
import logo from './logo.png';
import './App.css';
import MovieInput from './components/MovieInput';
import MovieItem from './components/MovieItem';

function App() {
  const [movies , setMovies] = useState([])

  const addMoviesList =(title)=>{
    const newMovie = { id: Date.now(), title, isFavorite: false };
    console.log(newMovie)
    setMovies([...movies , newMovie])
  }

  const removeMovie =(id)=>{
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const makeFavorite =(id)=> {
    setMovies(movies.map(movie => movie.id === id ? {
      ...movie, isFavorite : !movie.isFavorite } : movie
    ))
  }

  return (
    <div className="App">
       <header className="App-header">
        <h2>20 Days of React</h2>
        <h3>Day 11 - Favorite Movies</h3>
      </header>
      <div>
        <MovieInput addMovies={addMoviesList}/>
        <ul>
        {movies.map((movie) => (
          <MovieItem  key={movie.id} movie={movie}  deleteMovie={removeMovie} handleFavorite={makeFavorite}/>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
