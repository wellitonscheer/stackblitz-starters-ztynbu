export interface FilmeInterface {
  original_title: string;
  release_date: string;
  poster_path: string;
}

export interface FilmeProps {
  filme: FilmeInterface;
}

export function Filme({ filme }: FilmeProps) {
  console.log('filme');
  console.log(filme);
  console.log('filme');
  return (
    <>
      <img
        src={'https://image.tmdb.org/t/p/w154/' + filme.poster_path}
        alt=""
      />
      <div>{filme.original_title}</div>
    </>
  );
}
