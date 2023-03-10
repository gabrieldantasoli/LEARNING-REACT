import { Routes , Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

const Rotas = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default Rotas;