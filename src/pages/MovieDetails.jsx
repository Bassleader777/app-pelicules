import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const allMovies = JSON.parse(localStorage.getItem('movies')) || [];
        const foundMovie = allMovies.find(m => m.id.toString() === id);
        setMovie(foundMovie);
    }, [id]);

    if (!movie) {
        return <div>Carregant informació de la pel·lícula...</div>;
    }

    return (
        <div className="details-container">
            <Link to="/" className="back-button">← Torna a la cartellera</Link>
            <div className="details-content">
                <img src={movie.posterUrl} alt={`Pòster de ${movie.title}`} className="details-poster" />
                <div className="details-info">
                    <h1>{movie.title}</h1>
                    <p className="details-year">{movie.year}</p>
                    <p className="details-description">{movie.description}</p>

                    <div className="details-meta">
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Actors:</strong> {movie.actors}</p>
                        <p><strong>Gènere:</strong> {movie.genre}</p>
                    </div>

                    <a href={movie.trailerUrl.replace('embed/', 'watch?v=')} target="_blank" rel="noopener noreferrer" className="trailer-button">
                        ▶ Veure Tràiler
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;