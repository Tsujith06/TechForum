import React, { useState } from 'react';
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? images : images.slice(0,images.length/2);

  return (
    <div className='flex flex-col items-center justify-center '>
      {/* Gallery Grid */}
      <div className='w-full max-w-[1248px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4'>
        {visibleImages.map((src, idx) => (
          <div
            key={idx}
            className="cursor-pointer overflow-hidden group rounded-[8px] transform transition duration-500 ease-in-out"
          >
            <img
              src={src}
              alt={`Gallery ${idx}`}
              className="w-full h-60 object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-75"
            />
          </div>
        ))}
      </div>

      {/* View More / Less Button */}
      <div className="mt-6">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
          >
            View More
          </button>
  
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Gallery;
