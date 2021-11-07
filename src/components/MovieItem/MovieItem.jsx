import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelectMovie = () => {
        dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: movie
        })
        dispatch({
            type: 'FETCH_GENRES',
            payload: movie
        })
        history.push('/details');
        
    };

    return (
        // <h2>TEST</h2>
        <>
            <div>
                <h1 key={movie.id}></h1>
                <h3>{movie.title}</h3>
                <img src={movie.poster}
                    alt={movie.title}
                    onClick={handleSelectMovie} />
            </div>
        </>
    );
}

export default MovieItem;