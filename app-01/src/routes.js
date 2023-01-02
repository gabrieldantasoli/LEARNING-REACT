import { Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";

const Rotas = () => {
    return(
        <Routes >
            <Route exact path='/' element={<Home />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/sobre' element={<Sobre />} />
        </Routes>
    )
}

export default Rotas;