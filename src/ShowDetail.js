import React, { useState } from 'react';

function ShowDetail({ show }) {
  const [displayDetails, setDisplayDetails] = useState(false);
  return <div>
    <h3 className="title">{show.name}</h3>
    <img src={show.image.medium} onClick={() => setDisplayDetails(!displayDetails)} />
    {displayDetails ? <p>{show.type} / {show.status}</p> : ''}
    {/* displayDetails && <p>{show.type} / {show.status}</p> */}
  </div>
}

export default ShowDetail;