import React, { useEffect, useState } from 'react';

function Akas({ id }) {
  const [akas, setAkas] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/akas`)
      .then(response => response.json())
      .then(data => setAkas(data));
  }, [])
  return <div>
    {akas.map(aka => 
      <p key={aka.country.name}>{aka.name} (in {aka.country.name})</p>
    )}
  </div>
}

export default Akas;