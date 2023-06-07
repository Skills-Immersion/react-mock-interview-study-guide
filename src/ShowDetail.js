import React, { useState } from 'react';
import Aliases from './Aliases';

function ShowDetail({ show }) {
  const [shouldShowTypeAndStatus, setShouldShowTypeAndStatus] = useState(false);
  const [shouldShowAliases, setShouldShowAliases] = useState(false);
  return <div>
    <h3 className="title" onClick={() => setShouldShowAliases(!shouldShowAliases)}>{show.name}</h3>
    <img src={show.image.medium} onClick={() => setShouldShowTypeAndStatus(!shouldShowTypeAndStatus)} />
    {shouldShowTypeAndStatus ?
      <div> Type: {show.type} Status: {show.status} </div> :
      ''}
    {shouldShowAliases ? <Aliases showId={show.id}/> : ''}
  </div>
}

export default ShowDetail;
