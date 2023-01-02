import React from 'react';
import useState from 'react'

export default class Nutri extends React.Component {
    constructor() {
        super();
    }
    
  
    componentDidMount() {
        
        fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        .then((r) => r.json())
        .then((json) => {
          this.setNutri(json);
        })
    }

    x() {
        const [nutri, setNutri] = useState([]);
    }
  
    render() {
        return (
            <div className='conteiner'>
              <header>
                <strong>React Nutri</strong>
              </header>
        
              {this.nutri.map((item) => {
                return(
                  <article key={item.id} className="post" >
                    <strong className='titulo'>{item.titulo}</strong>
                    <img src={item.capa} alt={item.titulo} className="capa"/>
                    <p className='subtitulo'>{item.subtitulo}</p>
                    <a className='botao'>Acessar</a>
                  </article>
                );
              })};
            </div>
        )
    }
  }