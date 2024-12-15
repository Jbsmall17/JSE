import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import Footer from './components/Footer'
import Home from './pages/Home'
import Service from './pages/Service'
import Testimonials from './pages/Testimonials'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
         <Route 
          path='/service'
          element={<Service />}
        />
         <Route 
          path='/testimonials'
          element={<Testimonials />}
        />
        <Route 
          path='/about-us'
          element={<AboutUs />}
        />
        <Route 
          path='/contact-us'
          element={<ContactUs />}
        />
        <Route 
          path='/*'
          element={<Home />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
