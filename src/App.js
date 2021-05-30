import { useState } from "react";
import "./styles.css";

const movies = {
  "Sci-fi": [
    { name: "Tenet", rating: 4 },
    { name: "The Platform", rating: 4.5 },
    { name: "Space Sweeper", rating: 3.5 }
  ],
  Action: [
    { name: "Extraction", rating: 4.3 },
    { name: "John Wick", rating: 4 }
  ],
  Horror: [
    { name: "The Lie", rating: 4.6 },
    { name: "The Conjuring 2", rating: 4 },
    { name: "Ouija", rating: 3.6 }
  ]
};

export default function App() {
  const [genreSelected, setGenre] = useState("Horror");

  function onClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h2>
        {" "}
        <span role="img" aria-label="movie">
          🎥
        </span>{" "}
        Movie Mania
      </h2>
      <p>Here are some of my recommended movies</p>
      <div>
        {Object.keys(movies).map((genre) => (
          <button onClick={() => onClickHandler(genre)} className="genre">
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul
          style={{
            textAlign: "left",
            margin: "0.5rem"
          }}
        >
          {movies[genreSelected].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem ",
                margin: "1rem",
                border: "1px solid #D3D3D3",
                borderRadius: "0.3rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{movie.name}</div>
              <div style={{ fontSize: "smaller" }}>rating {movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
