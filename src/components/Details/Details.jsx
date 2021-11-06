import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from 'react-router';

function Details() {

    const dispatch = useDispatch();
    const movie = useSelector((store) => store.selectedMovie);
    const history = useHistory();
    const genre = useSelector((store) => store.genres);

    useEffect(() => {
        // dispatch({ type: 'FETCH_DETAILS' });
    }, []);

    // console.log(movies[3].description);
    // console.log(movies);
    return (
        <section>
            <h1>Test</h1>
            {

                <>
                    <div>
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} />
                        <p>Movie Description: {movie.description}</p>
                    </div>
                    <p>Genres: <span>{genres.map(genre => genre.name}.join(',')</span></p>
                </>

            }

            <button>Back to List</button>
        </section>
    );
}

export default Details;