import React,{ useEffect , useState } from "react";
import Tmdb from "./Tmdb";

//Importando css do APP
import './App.css'

//Importando componentes usado no APP
import MovieRow from "./components/movieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default function App(){
  const [featureData,setFeatureData] = useState(null);
  const [movieList,setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Obtendo a lista de filmes/series
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Setando o filme em destaque
      let originals = list.filter(i => i.slug === 'Originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      <Header />

      {featureData && 
        <FeaturedMovie item={featureData} />
      }

      <section className="lists">
        {movieList.map((item,key) =>  (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}