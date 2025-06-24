import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Poems from './pages/Poems';
import About from './pages/About';
import Contact from './pages/Contact';
import Search from './pages/Search'; // optional, for future
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/poems" element={<Poems />} />
  <Route path="/blog" element={<Blog />} />   
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/search" element={<Search />} /> {/* optional - for future refernece */}
</Routes>
<Footer/>
    </Router>
  );
}

export default App;
