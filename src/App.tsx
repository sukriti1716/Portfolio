import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import Projects from"./components/Projects"
import ChatappPage from './components/ChatappPage';
import Portfolio from './components/Portfolio';
import ETailing from './components/ETailing';
import Contact from './components/Contact';
import Experience from './components/Experience';
function App() {
  return (
    <div >
     {/* <Navbar/> */}
     <Router>
      <Routes>
      
        <Route path='/' element={<Navbar />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Aboutme/>}/>
            <Route path="/project" element={<Projects/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/chatapp-page" element={<ChatappPage/>}/>
            <Route path="/E-Tailing" element={<ETailing/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/experience" element={<Experience/>}/>
        </Route>
       
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
