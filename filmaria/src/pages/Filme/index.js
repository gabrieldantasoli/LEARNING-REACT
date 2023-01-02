import { useState , useEffect } from 'react';
import './filme.css';
import { useParams , useHistory } from 'react-router-dom';
import React from 'react';
import API from '../../Services/api';

export default function Filme() {
    const { id } = useParams();

    const [filme , setFilme] = useState([]);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        async function loadFilme() {
            const response = await API.get(`r-api/?api=filmes/${id}`)
            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();
    },[id]);

    if (loading) {
        return(
            <div className='filmeLoading'>
                <h1>Seu filme está sendo carregado!</h1>
            </div>
        )
    }
    return(
        <div className='filme'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />

            <h3>sinopse</h3>
            <p>{filme.sinopse}</p>

            <div> 
                <button onClick={() => {}}> Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`} >Trailer</a>
                </button>
            </div>
        </div>
    )
}