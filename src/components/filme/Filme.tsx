import './filme.css';

export interface FilmeInterface {
  original_title: string;
  release_date: string;
  poster_path: string;
  vote_average: string;
}

export interface FilmeProps {
  filme: FilmeInterface;
}

export function Filme({ filme }: FilmeProps) {
  async function handleFavoritar() {
    alert('Filme favoritado: ' + filme.original_title);
  }
  return (
    <>
      <div className="filme">
        <img
          src={'https://image.tmdb.org/t/p/w154/' + filme.poster_path}
          alt="no image"
        />
        <small>{filme.vote_average}</small>
        <button onClick={handleFavoritar}>Favoritar</button>
        <div>
          <b> {filme.original_title}</b>
          {filme.release_date}
        </div>
      </div>
    </>
  );
}
