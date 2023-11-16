import React from 'react'
import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
import Login from './components/login/Login';
import Home from './components/Home/Home';
import Course from './components/courses/Course';
import Note from './components/notes/Note';
import Register from './components/register/Register';
import Contact from './components/contact/Contact'

export default function App() {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>login</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/notes'>Notes</Link></li>
        </ul>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/notes" element={<Note/>} />
      </Routes>
    </div>
  )
}
