import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css'

import API from '../../Services/api'

function Home() {
  const [filmes , setFilmes] = useState([]);


  useEffect(() => {
    async function loadFilmes() {
      const response = await API.get('r-api/?api=filmes');
      setFilmes(response.data);
    }

    loadFilmes();
  },[]);

  return (
    <section className='filmes'>
      <div className='lista--filmes'>
        {filmes.map((filme) => {
            return(
              <article key={filme.id}>
                <h2>{filme.nome}</h2>
                <img src={filme.foto} alt={filme.nome} />
                <Link className='link' to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            )
        })}
      </div>
      
    </section>
  );
}
  
export default Home;