import { useEffect, useState } from 'react';
import ShowDetail from './ShowDetail';
import './App.css';

function App() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=1")
      .then(response => response.json())
      .then(data => setShows(data));
  }, [])
  return (
    <div className="App">
      <h1>Look at these TV shows!</h1>
      {shows.map(s => <ShowDetail key={s.id} show={s} />)}
    </div>
  );
}

export default App;
