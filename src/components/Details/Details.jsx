import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from 'react-router';

function Details() {

    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movies);
    const history = useHistory();
    console.log(movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS' });
    }, []);

console.log(movies[3].description);
    return (
        <section>
            <h1>Test</h1>
            {
                movies.description ? (
                    <>
                        <h2>{movies.movie.description}</h2>
                        <p>Movie Description: {movies.movie.description}</p>
                    </>
                ) : (
                    <p>No Movies Selected</p>
                )
            }
        </section>
    );
}

export default Details;