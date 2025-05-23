import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./AddBook.css"; 

const AddBook = () => {
  const [book, setBook] = useState({ title: "", author: "", price: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(API_URL, book).then(() => navigate("/"));
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-5">➕ Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">✅ Save Book</button>
      </form>
    </div>
  );
};

export default AddBook;
