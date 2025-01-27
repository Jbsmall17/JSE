import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Service from './pages/Service'
import Testimonials from './pages/Testimonials'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import QuoteForm from './pages/QuoteForm'
import PricingPlan from './pages/PricingPlan'
import Payment from './pages/Payment'

// Add this test component
const TestComponent = () => <div className="p-4">Test Component Working</div>;

function App () {

  return (
    <Router>
      <Routes> 
        <Route
          path='/'
          element={ <Home /> }
        />
        <Route
          path='/services'
          element={ <Service /> }
        />
        <Route
          path='/testimonials'
          element={ <Testimonials /> }
        />
        <Route
          path='/about-us'
          element={ <AboutUs /> }
        />
        <Route
          path='/contact-us'
          element={ <ContactUs /> }
        />
        <Route
          path='/quote'
          element={ <QuoteForm /> }
        />
        <Route
          path='/pricing'
          element={ <PricingPlan /> }
        />
        <Route
          path='/payment'
          element={ <Payment /> }
        />
        <Route
          path='/test'
          element={ <TestComponent /> }
        />
        <Route
          path='/*'
          element={ <Home /> }
        />
      </Routes>
    </Router>
  )
}

export default App
