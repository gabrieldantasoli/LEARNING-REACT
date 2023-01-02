import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'

const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/Filme/:id" element={<Filme />} />
            <Route exact path='/Favoritos' element={<Favoritos />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default Rotas;