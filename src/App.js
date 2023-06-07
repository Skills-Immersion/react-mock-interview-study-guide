import { useEffect, useState } from 'react';
import ShowDetail from './ShowDetail';
import ShowsList from './ShowsList';
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
      {/* either a separate ShowsList component or a map inline here are both good solutions */}
      <ShowsList shows={shows} />
      {/* {shows.map(show => <ShowDetail show={show} key={show.id} />)} */}
    </div>
  );
}

export default App;
