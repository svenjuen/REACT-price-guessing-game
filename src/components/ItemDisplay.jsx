import { useEffect, useState } from 'react';

export default function ItemDisplay({ item }) {
  const [loadedSrc, setLoadedSrc] = useState(null);

  // Optimized image loading with fade-in effect
  useEffect(() => {
    if (item?.img && loadedSrc !== item.img) {
      const img = new Image();
      img.src = `images/${item.img}`;
      img.onload = () => setLoadedSrc(img.src);
    }
  }, [item]);

  return (
    <div className="item-display">
      <img 
        src={loadedSrc || ''}
        style={{ 
          opacity: loadedSrc ? 1 : 0,
          transition: 'opacity 0.3s ease',
          width: '300px',
          height: '300px',
          objectFit: 'contain'
        }}
        alt={item?.desc}
      />
      <p className="item-description">{item?.desc}</p>
    </div>
  );
}