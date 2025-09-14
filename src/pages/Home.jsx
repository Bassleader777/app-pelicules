import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState(() => {
    // Llista COMPLETA amb totes les dades addicionals
    const initialMovies = [
      {
        id: 1,
        title: "Interestellar",
        year: "2014",
        posterUrl: "/interstellar.jpg",
        trailerUrl: "https://www.youtube.com/embed/UoSSbmD9vqc",
        description:
          "Un equip d'exploradors viatja a través d'un forat de cuc a l'espai per intentar assegurar la supervivència de la humanitat.",
        director: "Christopher Nolan",
        actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        genre: "Ciència-ficció, Drama",
      },
      {
        id: 2,
        title: "Bullet Train",
        year: "2022",
        posterUrl: "/bullet-train.jpg",
        trailerUrl: "https://www.youtube.com/embed/0IOsk2Vlc4o",
        description:
          "Cinc assassins a sou descobreixen que les seves missions estan interconnectades mentre es troben a bord d'un tren bala que viatja pel Japó.",
        director: "David Leitch",
        actors: "Brad Pitt, Joey King, Aaron Taylor-Johnson",
        genre: "Acció, Comèdia",
      },
      {
        id: 3,
        title: "Expediente Warren: El último rito",
        year: "2021",
        posterUrl: "/expediente-warren.webp",
        trailerUrl: "https://www.youtube.com/embed/FIiiMiC7GGY",
        description:
          "Una esgarrifosa història de terror, assassinat i un mal desconegut que va commocionar fins i tot els investigadors paranormals Ed i Lorraine Warren.",
        director: "Michael Chaves",
        actors: "Patrick Wilson, Vera Farmiga, Ruairi O'Connor",
        genre: "Terror, Misteri",
      },
      {
        id: 4,
        title: "Transformers",
        year: "2007",
        posterUrl: "/transformers.jpg",
        trailerUrl: "https://www.youtube.com/embed/itnqEauWQZM",
        description:
          "Una antiga lluita entre dues races de robots alienígenes arriba a la Terra, amb la clau de la victòria en mans d'un jove adolescent.",
        director: "Michael Bay",
        actors: "Shia LaBeouf, Megan Fox, Josh Duhamel",
        genre: "Acció, Ciència-ficció",
      },
      {
        id: 5,
        title: "El Padrino",
        year: "1972",
        posterUrl: "/el-padrino.jpg",
        trailerUrl: "https://www.youtube.com/embed/iOyQx7MXaz0",
        description:
          "El patriarca d'una dinastia del crim organitzat transfereix el control del seu imperi clandestí al seu reticent fill.",
        director: "Francis Ford Coppola",
        actors: "Marlon Brando, Al Pacino, James Caan",
        genre: "Crim, Drama",
      },
      {
        id: 6,
        title: "Pulp Fiction",
        year: "1994",
        posterUrl: "/pulp-fiction.jpg",
        trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        description:
          "Les vides de dos sicaris, la dona d'un gàngster, un boxejador i lladres s'entrellacen en quatre històries de violència i redempció.",
        director: "Quentin Tarantino",
        actors: "John Travolta, Uma Thurman, Samuel L. Jackson",
        genre: "Crim, Drama",
      },
      {
        id: 7,
        title: "Malditos Bastardos",
        year: "2009",
        posterUrl: "/malditos-bastardos.jpg",
        trailerUrl: "https://www.youtube.com/embed/KnrRy6kSFF0",
        description:
          "A la França ocupada pels nazis, un pla per assassinar líders nazis per part de soldats jueus nord-americans coincideix amb els plans de venjança de la propietària d'un cinema.",
        director: "Quentin Tarantino",
        actors: "Brad Pitt, Christoph Waltz, Mélanie Laurent",
        genre: "Bèl·lic, Drama",
      },
      {
        id: 8,
        title: "Fight Club",
        year: "1999",
        posterUrl: "/fight-club.jpg",
        trailerUrl: "https://www.youtube.com/embed/qtRKdVHc-cE",
        description:
          "Un oficinista insomne i un fabricant de sabó formen un club de lluita clandestí que evoluciona cap a quelcom molt, molt més gran.",
        director: "David Fincher",
        actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
        genre: "Drama, Thriller",
      },
      {
        id: 9,
        title: "Gladiator II",
        year: "2024",
        posterUrl: "/gladiator.jpg",
        trailerUrl: "https://www.youtube.com/embed/HCjuv9STNps",
        description:
          "Anys després de la mort de Màxim, Luci, el fill de Lucil·la, ha de sobreviure a la perillosa arena política de Roma i enfrontar-se al seu propi destí.",
        director: "Ridley Scott",
        actors: "Paul Mescal, Denzel Washington, Pedro Pascal",
        genre: "Acció, Drama",
      },
      {
        id: 10,
        title: "Crank: Alto voltaje",
        year: "2009",
        posterUrl: "/crank.jpg",
        trailerUrl: "https://www.youtube.com/embed/t2koYVqwzT4",
        description:
          "El sicari Chev Chelios sobreviu a una caiguda mortal, només per ser segrestat i veure com li roben el cor per reemplaçar-lo per un dispositiu a bateria.",
        director: "Mark Neveldine, Brian Taylor",
        actors: "Jason Statham, Amy Smart, Dwight Yoakam",
        genre: "Acció, Thriller",
      },
      {
        id: 11,
        title: "Alien",
        year: "1979",
        posterUrl: "/alien.jpg",
        trailerUrl: "https://www.youtube.com/embed/Eu9ZFTXXEiw",
        description:
          "La tripulació de la nau Nostromo investiga un senyal de socors d'una lluna alienígena, trobant una forma de vida que es reprodueix dins d'hostes humans.",
        director: "Ridley Scott",
        actors: "Sigourney Weaver, Tom Skerritt, John Hurt",
        genre: "Ciència-ficció, Terror",
      },
      {
        id: 12,
        title: "Snatch: Cerdos y Diamantes",
        year: "2000",
        posterUrl: "/snatch.jpg",
        trailerUrl: "https://www.youtube.com/embed/9Jar2XkBboo",
        description:
          "Promotors de boxa, gàngsters russos, lladres incompetents i joiers jueus lluiten per localitzar un diamant robat de valor incalculable.",
        director: "Guy Ritchie",
        actors: "Jason Statham, Brad Pitt, Benicio Del Toro",
        genre: "Comèdia, Crim",
      },
    ];
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : initialMovies;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter((movie) => {
    const term = searchTerm.toLowerCase();
    const titleMatch = movie.title.toLowerCase().includes(term);
    const yearMatch = movie.year.toString().includes(term);
    return titleMatch || yearMatch;
  });

  return (
    <>
      <div className="app-container">
        <div className="header">
          <h1>Genís</h1>
          <span>Cartellera</span>
        </div>

        <div className="search-container">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
          </svg>
          <input
            type="text"
            placeholder="Busca per títol o any..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <p className="movie-counter">
          En cartellera: {filteredMovies.length} pel·lícules
        </p>

        <div className="movie-grid">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              // A src/pages/Home.jsx, dins de la funció map

              <div key={movie.id} className="movie-card">
                <img src={movie.posterUrl} alt={`Pòster de ${movie.title}`} />
                <div className="movie-card-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.year}</p>
                </div>

                <div className="movie-card-overlay">
                  <div className="overlay-buttons">
                    <button
                      className="overlay-button"
                      onClick={() => setSelectedTrailer(movie.trailerUrl)}
                    >
                      ▶ TRÀILER
                    </button>
                    <Link
                      to={`/pelicula/${movie.id}`}
                      className="overlay-button"
                    >
                      ℹ INFO
                    </Link>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteMovie(movie.id);
                  }}
                  className="delete-btn-card"
                  data-tooltip="Eliminar"
                >
                  <span>&times;</span>
                </button>
              </div>
            ))
          ) : (
            <p>No s'han trobat pel·lícules amb aquest criteri.</p>
          )}
        </div>
      </div>

      {selectedTrailer && (
        <div className="modal-overlay" onClick={() => setSelectedTrailer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={selectedTrailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="close-modal-btn"
              onClick={() => setSelectedTrailer(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
