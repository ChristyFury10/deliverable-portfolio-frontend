import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About about={aboutInfo}/>}/>
        <Route path="/projects" element={<Projects projects={projects}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
