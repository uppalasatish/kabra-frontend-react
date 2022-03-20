import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";
import AddBook from "./components/AddBook";
import MyCart from "./components/MyCart";
import {Routes,Route} from 'react-router-dom';
import React from "react";
function App() {
    return (
        <React.Fragment>
            <header>
                <Header/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/add" element={<AddBook />} exact />
                    <Route path="/books" element={<Books />} exact />
                    <Route path="/about" element={<About />} exact />
                    <Route path="/books/:id" element={<BookDetail />} exact />
                    <Route path="/cart" element={<MyCart />} exact />
                </Routes>
            </main>
        </React.Fragment>
    );
}

export default App;
