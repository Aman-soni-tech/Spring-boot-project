import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";
import "./BookList.css"; // ✅ Import CSS

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => setBooks(response.data));
  }, []);
  const deleteBook = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };
  return (
    <div className="book-list-container">
      <h2 className="h2">📚 Book List</h2>
      <Link to="/add" className="btn btn-primary">➕ Add Book</Link>
      {books.map((book) => (
        <div key={book.id} className="book-card glass">
          <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p> Rs.{book.price}</p>
          </div>
          <div>
            <Link to={`/edit/${book.id}`} className="btn btn-warning">✏ Edit</Link>
            <button className="btn btn-danger" onClick={() => deleteBook(book.id)}>❌ Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
