import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem.jsx'


function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    // const handleSelectMovie = (id) => {
    //     dispatch({
    //         type: 'SET_SELECTED_MOVIE', 
    //         payload: movies})
    //     history.push('/details');
    // };

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
                <button>ADD MOVIE PAGE</button>
            </section>
        </main>

    );
}

export default MovieList;