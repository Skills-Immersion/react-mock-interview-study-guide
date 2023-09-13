import React, { useState } from 'react';

function ShowDetail({ show }) {
  // to show and hide the type and status, we'll need
  // - a state variable that holds whether they should be shown right now
  // - onClick for the image that toggles that state variable
  // - a div that conditionally shows the type & status
  const [shouldShowExtraDetails, setShouldShowExtraDetails] = useState(false);
  return <div>
    <h3 className="title">{show.name}</h3>
    <img onClick={() => setShouldShowExtraDetails(!shouldShowExtraDetails)} src={show.image.medium} />
    {shouldShowExtraDetails &&
      <div>Type: {show.type} Status: {show.status}</div>}
  </div>
}

export default ShowDetail;
