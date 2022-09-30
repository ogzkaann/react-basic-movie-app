import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initialFormValues = { movie_name: "", rating: "" };

function Form({ addContact, movies }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [movies]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.movie_name === "" || form.rating === "") return false;

    addContact([...movies, form]);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-floating mb-3">
          <input
            name="movie_name"
            className="form-control"
            placeholder="Movie Name"
            value={form.movie_name}
            onChange={onChangeInput}
          />
          <label htmlFor="floatingInput">Movie Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            name="rating"
            className="form-control"
            placeholder="Rating"
            value={form.rating}
            onChange={onChangeInput}
          />
          <label htmlFor="floatingInput">Rating</label>
        </div>
        <div className="d-grid gap-2">
          <Button variant="outline-primary" size="lg" type="submit">
            Add
          </Button>{" "}
        </div>
      </form>
    </>
  );
}

export default Form;
