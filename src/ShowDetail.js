import React, { useState } from 'react';

function ShowDetail({ show }) {
  // task 2, I need three things
  // state variable to hold whether or not the type/status are displayed
  // click handler on the image to toggle that state variable
  // conditional rendering to display that data, depending on the state variable
  const [displayStatus, setDisplayStatus] = useState(false);
  return <div>
    <h3 className="title">{show.name}</h3>
    <img src={show.image.medium} onClick={() => setDisplayStatus(!displayStatus)}></img>
    {displayStatus && <p>
      Type: {show.type} Status: {show.status}
    </p>}
  </div>
}

export default ShowDetail;
