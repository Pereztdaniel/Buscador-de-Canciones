import "./App.css";
import SongSearch from "./components/SongSearch.js";
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app">
      <>
        <div className="app__topCircle"></div>
        
        <div className="app__title">
          <div className="app__middleCircle-border">
            <div className="app__middleCircle">
              
            </div>
          </div>
            <h2>Buscador de Letras de Canciones</h2>
            <h4>Escribe el nombre y canción de tu artista favorito</h4>
        </div>
        <div>
          <SongSearch/>
        </div>
        <div className="app__bottomCircle"></div>
        <Footer />
      </>
    </div>
  );
}

export default App;