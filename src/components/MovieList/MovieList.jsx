import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem.jsx'


function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    const handleSelectMovie = (id) => {
        dispatch({
            type: 'SET_SELECTED_MOVIE', 
            payload: id})
        history.push('/details');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => handleSelectMovie(movie.id)}/>
                            {/* <MovieItem key = {movie.id} movie={movie} /> */}


                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;