import { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

export default function App() {
  const [dati, setDati] = useState({
    author: "",
    title: "",
    text: "",
    publico: false,
  });

  const baseAPI = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDati({
      ...dati,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(baseAPI, dati).then(() => {
      alert("Inviato!");
      console.log(dati);
    });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Form</h1>
      <div className="mb-3">
        <label className="form-label" htmlFor="author">
          Author
        </label>
        <input
          name="author"
          value={dati.author}
          className="form-control"
          id="author"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          name="title"
          value={dati.title}
          className="form-control"
          id="title"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="text">
          Text
        </label>
        <input
          name="text"
          value={dati.text}
          className="form-control"
          id="text"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          name="publico"
          checked={dati.publico}
          className="form-check-input"
          id="publico"
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="publico">
          Post Pubblico
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
