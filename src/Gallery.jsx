import React from 'react';

const Gallery = ({urls}) => {
 return (
  <div className="gallery-container">
    {urls.map((url, i) => <img key={`key${i}`} className="gallery-item" src={url} alt="pic"></img>)}
  </div>
 )
};

export default Gallery;
