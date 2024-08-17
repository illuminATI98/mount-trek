import './App.scss'
import React from 'react';
import { BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import { Navbar, Footer, Header} from './components';
import { Home,  About, Contact, Gallery, Informations, Tours, Tour} from './pages';


function App() {
  
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/informations" element={<Informations />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tour/:id" element={<Tour />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
