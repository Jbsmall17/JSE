import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Service from './pages/Service'
import Testimonials from './pages/Testimonials'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'


function App() {

  return (
    <>
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
    </>
  )
}

export default App
