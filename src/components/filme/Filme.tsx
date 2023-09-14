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
  return (
    <>
      <div className="filme">
        <img
          src={'https://image.tmdb.org/t/p/w154/' + filme.poster_path}
          alt="no image"
        />
        <small>{filme.vote_average}</small>
        <div>{filme.original_title}</div>
      </div>
    </>
  );
}
