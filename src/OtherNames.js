import React, { useEffect, useState } from 'react'

function OtherNames({ showId }) {
  const [otherNames, setOtherNames] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}/akas`)
      .then(response => response.json())
      .then(data => setOtherNames(data));
  }, [])
  return <div>
    {otherNames.map(otherName => <div>Known as {otherName.name} in {otherName.country.name}</div>)}
  </div>
}

export default OtherNames;
