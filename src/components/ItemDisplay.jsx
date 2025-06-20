import React, { useEffect, useState } from 'react';

export default function ItemDisplay({ item }) {
  const [loadedSrc, setLoadedSrc] = useState(null);

  // Bild Laden
  useEffect(() => {
    if (item?.img && loadedSrc !== `/images/${item.img}`) {
      const img = new Image();
      img.src = `/images/${item.img}`;
      img.onload = () => setLoadedSrc(img.src);
    }
  }, [item]);


  return (
    <div className="item-display">
      <img 
        src={loadedSrc || '/images/placeholder.jpg'} // Fallback-Bild fall das Bild nicht geladen wird
        style={{ 
          opacity: loadedSrc ? 1 : 0,
          transition: 'opacity 0.3s ease',
          width: '400px',
          height: '400px',
          objectFit: 'contain'
        }}
        alt={item?.desc}
        onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
      />
      <p className="item-description">{item?.desc}</p>
    </div>
  );
}