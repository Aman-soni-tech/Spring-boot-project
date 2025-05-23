import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../config";
import "./UpdateBook.css"; 

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", price: "" });

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then((response) => setBook(response.data));
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${API_URL}/${id}`, book).then(() => navigate("/"));
  };

  return (
    <div className="container mt-5">
      <h2>✏ Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={book.title} className="form-control mb-3" onChange={handleChange} required />
        <input type="text" name="author" value={book.author} className="form-control mb-3" onChange={handleChange} required />
        <input type="number" name="price" value={book.price} className="form-control mb-3" onChange={handleChange} required />
        <button type="submit" className="btn btn-warning">✔ Update</button>
      </form>
    </div>
  );
};

export default UpdateBook;
