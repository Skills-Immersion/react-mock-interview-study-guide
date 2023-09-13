import React, { useState } from 'react';
import OtherNames from './OtherNames';

function ShowDetail({ show }) {
  // to show and hide the type and status, we'll need
  // - a state variable that holds whether they should be shown right now
  // - onClick for the image that toggles that state variable
  // - a div that conditionally shows the type & status
  const [shouldShowExtraDetails, setShouldShowExtraDetails] = useState(false);
  const [shouldShowOtherNames, setShouldShowOtherNames] = useState(false);
  return <div>
    <h3 className="title" onClick={() => setShouldShowOtherNames(!shouldShowOtherNames)}>{show.name}</h3>
    <img onClick={() => setShouldShowExtraDetails(!shouldShowExtraDetails)} src={show.image.medium} />
    {shouldShowExtraDetails &&
      <div>Type: {show.type} Status: {show.status}</div>}
    {shouldShowOtherNames && <OtherNames showId={show.id} />}
  </div>
}

export default ShowDetail;
