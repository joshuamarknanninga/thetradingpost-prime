import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import ContactForm from './components/ContactForm'
import ContactFormModal from "./components/ContactFormModal"
import MapView from './components/MapView'
import "./styles/main.css"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
      <ContactFormModal />
    </div>
  )
}

export default App
