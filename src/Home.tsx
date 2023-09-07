import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/login">Login</Link>
    </>
  );
}
