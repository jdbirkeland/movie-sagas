import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import MovieItem from '../MovieItem/MovieItem';

function Details() {

    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS' });
    }, []);


    return (
        <section>
            <h1>Test</h1>
            {/* {
                movies.movie.description ? (
                    <>
                        <h2>{movies.movie.description}</h2>
                        <p>Movie Description: {movies.movie.description}</p>
                    </>
                ) : (
                    <p>No Movies Selected</p>
                )
            } */}
        </section>
    );
}

export default Details;