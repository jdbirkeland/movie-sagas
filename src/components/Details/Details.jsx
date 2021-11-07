import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import MovieItem from '../MovieItem/MovieItem';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function Details() {

    const dispatch = useDispatch();
    const movie = useSelector((store) => store.selectedMovie);
    const history = useHistory();
    const genres = useSelector((store) => store.genres);

    useEffect(() => {
        // dispatch({ type: 'FETCH_DETAILS' });
    }, []);

    const handleBackToList = () => {
        history.push("/");
    };

    // console.log(movies[3].description);
    // console.log(movies);
    return (
       
           
                <>
                    <div>
                        <h2>{movie.title}</h2>
                        <img src={movie.poster} />
                        <p>Movie Description: {movie.description}</p>
                    </div>
                    <p>Genres: <span>{genres.map(genre => genre.name).join(',')}</span></p>
                

            

            <button variant="outlined" type="button" onClick={handleBackToList}>Back to List</button>
            </>
    );
}


export default Details;