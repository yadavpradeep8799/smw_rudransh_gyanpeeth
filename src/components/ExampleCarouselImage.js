import React from 'react';

function ExampleCarouselImage({ imagePath, altText }) {
  return (
    <div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <img 
        src={imagePath} // Use the imagePath prop passed to the component
        alt={altText} 
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
      />
    </div>
  );
}

export default ExampleCarouselImage;
