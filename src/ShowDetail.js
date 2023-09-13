import React from 'react';

function ShowDetail({ show }) {
  return <div>
    <h3 className="title">{show.name}</h3>
    <img src={show.image.medium} />
  </div>
}

export default ShowDetail;
