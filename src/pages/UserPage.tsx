import { useEffect, useState } from 'react';
import { Filme } from '../components/filme/Filme';
import { getDiscoverMovies } from '../services/moviedb';

export function UserPage() {
  const [movies, setMovies] = useState([]);

  async function handleLoadMovies() {
    console.log('tentou');
    try {
      const data = await getDiscoverMovies();
      setMovies(data.results);
      console.log(data);
    } catch {
      console.log('deu ruim');
    }
  }

  useEffect(() => {
    handleLoadMovies();
  }, []);

  return (
    <>
      <h1>Bem-Vindo</h1>
      <hr />
      <h2>Seus Favoritos</h2>
      <hr />
      <h2>Veja outros lancamentos</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1rem',
        }}
      >
        {movies?.map((movie) => {
          return <Filme filme={movie} />;
        })}
      </div>
    </>
  );
}
