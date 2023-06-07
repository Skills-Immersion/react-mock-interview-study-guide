import React, { useEffect, useState } from 'react';

function Aliases({ showId }) {
  const [aliases, setAliases] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}/akas`)
      .then(response => response.json())
      .then(data => setAliases(data));
  }, [showId])
  return <div>
    <h4>Aliases</h4>
    {aliases.map(alias => <div key={alias.name}>
      {alias.name} in {alias.country.name}
    </div>)}
  </div>
}

export default Aliases;
