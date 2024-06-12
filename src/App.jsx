
import './App.css'
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Service from './pages/Service';

function App() {

  return (
     <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service/>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </Router>
     
     </>
  )
}

export default App
