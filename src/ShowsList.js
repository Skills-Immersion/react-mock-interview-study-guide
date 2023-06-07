import React from 'react';
import ShowDetail from './ShowDetail';

function ShowsList({shows}) {
  return <div>
    {shows.map(show => <ShowDetail show={show} key={show.id} />)}
  </div>
}

export default ShowsList;
