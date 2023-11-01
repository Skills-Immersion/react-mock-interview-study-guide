import React from 'react';
import ShowDetail from './ShowDetail';

function ShowsList({ shows }) {
  return <div>
    {shows.map(s => <ShowDetail show={s} key={s.id} />)}
  </div>
}

export default ShowsList;