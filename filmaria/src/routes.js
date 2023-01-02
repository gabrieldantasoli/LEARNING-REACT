import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Filme from './pages/Filme'

const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/Filme/:id" element={<Filme />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default Rotas;