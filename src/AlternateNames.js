import React, { useEffect, useState } from 'react';

function AlternateNames({ show }) {
  const [alternateNames, setAlternateNames] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${show.id}/akas`)
      .then(response => response.json())
      .then(data => setAlternateNames(data))
  }, [show])
  return <div>
    <h3>Alternates</h3>
    {alternateNames.map(alt => <p>{alt.name} (in {alt.country.name})</p>)}
  </div>
}
export default AlternateNames;
