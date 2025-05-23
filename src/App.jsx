import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/booklist/Booklist";
import AddBook from "./components/booklist/AddBook";
import UpdateBook from "./components/booklist/UpdateBook";
import "./index.css";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <Router>
       <DarkModeToggle />
      <Routes>
        <Route path="/" element={<BookList/>} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<UpdateBook />} />
      </Routes>
    </Router>
  );
}

export default App;
