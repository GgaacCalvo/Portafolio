import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar'
import Home from './componentes/Home';
import Skills from './componentes/Skills/Skills';
import About from './componentes/About/About';
import Footer from './componentes/Footer/Footer';
import Bop from './componentes/Bop/Bop';

function App() {
  
  return (
    <div class='d-flex flex-column justify-content-center w-100 h-100 app'>
     
      <Home/>
      <Skills/>
      <About/>
      <Bop/>
      <Footer/>
    </div>
  );
}

export default App;
