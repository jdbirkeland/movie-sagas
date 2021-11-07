import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";


function AddMovie() {
    const [movie, setMovie] = useState({ title: '', poster: '', description: '' }); //genre_id: '' ?

    const dispatch = useDispatch();
    const history = useHistory();


    // axios.post('/api/movie/POST', { movie })
    //     .then(response => {
    //         refreshMovies();
    //         setMovie('');
    //     })
    //     .catch(error => {
    //         console.log('Error in POST', error);
    //         alert('POOOOSSSSSSSTTTT')
    //     })

    const backToHome = (event) => {
        alert('You are going to the Home Page, Ok?')
        history.push('/');
    }

    // const handleTitleChange = (event, property) => {
    //     setMovie({ ...movie, [property]: event.target.value })
    // }

    //Adding New Movie
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Adding Movie', title, poster, description);
        dispatch({ type: 'ADD_MOVIE', payload: { title, poster, description } });

    };

        return (
            <section>
                <h2>Add Movie</h2>
                <form onSubmit={handleSubmit} className="add-movie-form">
                    <input
                        required
                        placeholder="Movie Title"
                        value={movie.title}
                        onChange={(event) => setMovie(event.target.value)} />
                    <input
                        required
                        placeholder="Poster URL"
                        value={movie.poster}
                        onChange={(event) => setMovie(event.target.value)} />
                    <input
                        required
                        placeholder="Description"
                        value={movie.description}
                        onChange={(event) => setMovie(event.target.value)} />

                    <button type="submit">
                        Add New Movie
                    </button>
                </form>
                <button type="submit" onClick={backToHome}>
                        Back to Home Page
                    </button>

            </section>
        );
    
};

export default AddMovie;