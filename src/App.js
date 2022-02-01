import './App.css';
import Intro from './Components/Intro';
import Interactive from './Components/Interactive';
import Creations from './Components/Creations';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
        <Intro/>
        <Interactive/>
        <Creations/>
        <Footer/>
        <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/yousef2007-rgb">Yousef Aburadi</a>.
  </div>
    </div>
  );
}

export default App;
