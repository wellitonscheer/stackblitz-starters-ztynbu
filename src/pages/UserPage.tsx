import { useEffect, useState } from 'react';
import { getDiscoverMovies } from '../services/moviedb';

export function UserPage() {
  const [movies, setMovies] = useState([]);

  async function handleLoadMovies() {
    try {
      const data = await getDiscoverMovies();
      setMovies(data.results);
      console.log(data);
    } catch {
      console.log('deu ruim');
    }
  }

  useEffect(() => {
    console.log('tentou');
    handleLoadMovies();
  }, []);

  return (
    <>
      <h1>Bem-Vindo</h1>
      <hr />
      <h2>Seus Favoritos</h2>
      <hr />
      <h2>Veja outros lancamentos</h2>
      {movies?.map((movie) => {
        return <div>{movie.original_title}</div>;
      })}
    </>
  );
}
