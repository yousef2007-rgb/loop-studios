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
    </div>
  );
}

export default App;
