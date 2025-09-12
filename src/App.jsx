import { useState, useEffect } from 'react';
import './App.css';

function App() {
// A src/App.jsx

// A src/App.jsx

const [movies, setMovies] = useState(() => {
    const initialMovies = [
      // Aquesta la deixem com una URL d'internet
      { id: 1, title: 'Interestellar', year: '2012', posterUrl: 'Interestellar_Póster.jpg' },
      { id: 2, title: 'Bullet Train', year: '2022', posterUrl: '/Bullet_Train-639045112-large.jpg' } 
    ];
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : initialMovies;
});
  const [newTitle, setNewTitle] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newPosterUrl, setNewPosterUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (e) => {
    e.preventDefault(); 
    if (newTitle.trim() === '' || newYear.trim() === '' || newPosterUrl.trim() === '') {
      alert('Tots els camps són obligatoris.');
      return;
    }
    const newMovie = { 
      id: Date.now(), 
      title: newTitle, 
      year: newYear, 
      posterUrl: newPosterUrl 
    };
    setMovies([...movies, newMovie]);
    setNewTitle('');
    setNewYear('');
    setNewPosterUrl('');
  };

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>La Meva Llista de Pel·lícules</h1>
      
      <p className="movie-counter">Tens {movies.length} pel·lícules a la teva llista.</p>

      <form onSubmit={handleAddMovie} className="add-movie-form">
        <input 
          type="text" 
          placeholder="Títol de la pel·lícula" 
          value={newTitle} 
          onChange={(e) => setNewTitle(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Any" 
          value={newYear} 
          onChange={(e) => setNewYear(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="URL del pòster" 
          value={newPosterUrl} 
          onChange={(e) => setNewPosterUrl(e.target.value)} 
        />
        <button type="submit">Afegir Pel·lícula</button>
      </form>

      <div className="search-container">
        <input
          type="text"
          placeholder="Busca una pel·lícula pel títol..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
      </div>
      
      <div className="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.posterUrl} alt={`Pòster de ${movie.title}`} />
              <div className="movie-card-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
              </div>
              <button 
                onClick={() => handleDeleteMovie(movie.id)} 
                className="delete-btn-card">
              </button>
            </div>
          ))
        ) : (
          <p>No s'han trobat pel·lícules.</p>
        )}
      </div>
    </div>
  );
}

export default App;