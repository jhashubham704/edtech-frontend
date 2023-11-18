import React from 'react'
import Register from '../register/Register'
import Login from '../login/Login'
import Nav from '../nav/Nav'
import Note from '../notes/Note'
import Intro from './Intro'
import './Home.css' ; 
import Courses from './Courses'
import Reviews from './Reviews'


import { BrowserRouter, Routes,Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      
      <Intro />
      <Reviews />
      <Courses />
      </div>
  )
}
