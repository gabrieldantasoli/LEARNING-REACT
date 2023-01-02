import { Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Erro from "./pages/Erro"
import Produto from "./pages/Produto"

const Rotas = () => {
    return(
        <Routes >
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contato' element={<Contato />} />
            <Route exact path='/sobre' element={<Sobre />} />
            <Route path='/produto/:id' element={<Produto />} />
            <Route path='*' element={<Erro />} />
        </Routes>
    )
}

export default Rotas;