import React, { useState } from 'react';
import AlternateNames from './AlternateNames';

function ShowDetail({ show }) {
  const [shouldShowExtraDetails, setShouldShowExtraDetails] = useState(false);
  const [shouldShowAkas, setShouldShowAkas] = useState(false);
  return <div>
    <h3 className="title" onClick={() => setShouldShowAkas(!shouldShowAkas)}>{show.name}</h3>
    <img src={show.image.medium} onClick={() => setShouldShowExtraDetails(!shouldShowExtraDetails)} />
    {shouldShowExtraDetails ? <p>
      Type: {show.type} Status: {show.status}
    </p> : ''}
    {shouldShowAkas && <AlternateNames show={show} />}
  </div>
}

export default ShowDetail;
