import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Details() {

    const selectedMovie = useSelector((store) => store.selectedMovie);

    useEffect(() => {

    });

return(
<section>
    <h2>DETAILS!!!</h2>

    {
        selectedMovie.movies.description ? (
            <>
                <h2>{selectedMovie.movies.description}</h2>
            </>
        ) : (
            <p>No Movie Selected.</p>
        )
    }
</section>
)

}



export default Details;