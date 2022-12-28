const API_Key = "4ee15f1b9e5abf4c8092f1df36eacfa6";
const API_Base = "https://api.themoviedb.org/3";

/*
    -originais
    -recomendados
    -alta
    -acao
    -comedia
    -terror
    -romance
    -documentario
*/

const basicFetch = async (endPoint) => {
    const req = await fetch(`${API_Base}${endPoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'Originais',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'Trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'TopRated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'Action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'Comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'Horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_Key}`)
            },
            {
                slug: 'Documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_Key}`)
            }
        ]
    }
}