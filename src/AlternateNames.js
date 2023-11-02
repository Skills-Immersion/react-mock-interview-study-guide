import React, { useState, useEffect } from 'react';

function AlternateNames({ id }) {
  // fetch the names of the show
  // save them to a state variable
  // display them on the page
  const [alts, setAlts] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/akas`)
      .then(response => response.json())
      .then(data => setAlts(data));
  }, [])
  return <div>
    {alts.map(alt => <div key={alt.country.code}>{alt.name} in {alt.country.name}</div>)}
  </div>
}

export default AlternateNames;