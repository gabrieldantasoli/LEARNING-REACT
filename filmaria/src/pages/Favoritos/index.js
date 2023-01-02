import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import './favoritos.css'

export default function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista));
    }, []);

    function handleDelete(id) {
        let filtroFilme = filmes.filter((item) => {
            return (item.id !== id);
        });

        setFilmes(filtroFilme);
        localStorage.setItem('filmes',JSON.stringify(filtroFilme));
    }

    return(
        <div id='my-filmes'>
            <h1>Meus Filmes</h1>
            <div id="favoritos">
                {filmes.map((item) => {
                    return (
                        <div>
                            <p>{item.nome}</p>
                            <div>
                                <Link className='link1' to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={()=> handleDelete(item.id)}>Excluir</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}