import { useState, useEffect } from "react";

import "./styles.css";

import List from "./List";
import Form from "./Form";

function Movies() {
  const [movies, setMovies] = useState([
    {
      movie_name: "Everything Everywhere All at Once",
      rating: 9,
    },
    {
      movie_name: "Tenet",
      rating: 9,
    },
    {
      movie_name: "Avengers: Endgame",
      rating: 8,
    },
  ]);

  useEffect(() => {}, [movies]);

  return (
    <div id="container">
      <h1>Movies</h1>
      <List movies={movies} />
      <Form addContact={setMovies} movies={movies} />
    </div>
  );
}

export default Movies;
