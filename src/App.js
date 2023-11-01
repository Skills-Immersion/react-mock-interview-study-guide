import { useEffect, useState } from 'react';
import './App.css';
import ShowDetail from './ShowDetail';
import ShowsList from './ShowsList';

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
      <ShowsList shows={shows} />
    </div>
  );
}

export default App;
