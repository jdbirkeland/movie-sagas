import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';


function MovieItem ({movie}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelectMovie = ({movies}) => {
        dispatch({type: 'SET_SELECTED_MOVIE', payload: movie})
        history.push('/details');
    };

    return (
        // <h2>TEST</h2>
        <li key={movie.id} onClick={() => handleSelectMovie(movie)} >
            Movie Description: {movie.description}
            </li>
        );
}

export default MovieItem;