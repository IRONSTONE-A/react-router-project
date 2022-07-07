import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route path= "/" element={<Home />}/>
      <Route path= "/" element={<Home />}/>
      <Route path= "/" element={<Home />}/>
      <Route path= "/" element={<Home />}/>
        <Instructors />
        <Contact />
        <NotFound />
        <Footer />
      </Routes> 
    </BrowserRouter>
      
    </>
  );
}

export default App;
