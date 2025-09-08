import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import CommentForm from "./Components/CommentForm";
import BlogDetails from "./Pages/SingleBlog";
import Contact from "./Pages/Contact";
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/form" element={<CommentForm />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
