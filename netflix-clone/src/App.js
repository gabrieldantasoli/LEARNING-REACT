import React,{ useEffect , useState } from "react";
import Tmdb from "./Tmdb";
import './App.css'
import MovieRow from "./components/movieRow";

export default function App(){

  const [movieList,setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Obtendo a lista de filmes/series
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item,key) =>  (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}