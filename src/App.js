import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Destinos } from './components/pages/Destinos'
import { Promocoes } from './components/pages/Promocoes'
import { Contato } from './components/pages/Contato'
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <header>
      <Router>
        <NavBar />
        <div className='pages'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/destinos" element={<Destinos />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </Router>
      </header>
      <section>
        
      </section>
      
      <footer>
      <Footer/>
      </footer>
    </div>
    
  );
}

export default App;
