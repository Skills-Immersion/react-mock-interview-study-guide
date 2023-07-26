import React, { useState } from 'react';
import Akas from './Akas';

function ShowDetail({ show }) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [displayAkas, setDisplayAkas] = useState(false);
  return <div>
    <h3 className="title" 
      onClick={() => setDisplayAkas(!displayAkas)}
      >{show.name}</h3>
    <img src={show.image.medium} onClick={() => setDisplayDetails(!displayDetails)} />
    {displayDetails ? <p>{show.type} / {show.status}</p> : ''}
    {displayAkas && <Akas id={show.id} />}
    {/* displayDetails && <p>{show.type} / {show.status}</p> */}
  </div>
}

export default ShowDetail;