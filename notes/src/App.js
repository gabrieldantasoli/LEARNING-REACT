// Importando css do app
import './App.css';

// Importando as rotas do site
import Rotas from './routes';
import Footer from "./components/Footer";

function App() {


  return (
    <div className="App">
      <Rotas />
      <Footer />
    </div>
  );
}

export default App;
