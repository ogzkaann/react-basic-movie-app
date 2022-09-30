import { useState } from "react";

function List({ movies }) {
  const [filterText, setFilterText] = useState("");

  const filtered = movies.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <div className="form-floating mb-3">
        <input
          placeholder="Filter"
          className="form-control"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <label htmlFor="floatingInput">Filter</label>
      </div>
      <ul className="list">
        {filtered.map((movie, i) => (
          <li key={i} className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-warning"
            >
              {movie.movie_name}
              <span>{movie.rating}</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="quo">Movies: {filtered.length}</p>
    </div>
  );
}

export default List;
