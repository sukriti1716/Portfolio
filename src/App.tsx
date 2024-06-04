import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Projects from"./components/Projects"
import Contact from './components/Contact';
import Experience from './components/Experience';
import ProjectData from './components/ProjectData';
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
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects/:selectedproject" element={<ProjectData />} />
        </Route>
       
      </Routes>
     </Router>
     
    </div>
  );
}

export default App;
