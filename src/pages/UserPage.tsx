import { useEffect, useState } from "react"
import { getDiscoverMovies } from "../services/moviedb";

export function UserPage() {
  const [movies, setMovies] = useState([]);

  async function handleLoadMovies(){
    const data = await getDiscoverMovies();
    setMovies(data.results);
  }

  useEffect(() => {
    handleLoadMovies();
  }, [])

  return (
    <>
      <h1>Bem-Vindo</h1>
      <hr>
      <h2>Seus Favoritos</h2>
      <hr>
      <h2>Veja outros lancamentos</h2>
    </>
  );
}
