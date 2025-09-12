import React from 'react';

const MovieCard = ({ id, title, image, year, rating, onDelete }) => {

    return (
        <div className="w-80 h-96 relative rounded-lg overflow-hidden hover:translate-y-[-10px] ease-in-out duration-[0.5s]" id='movies'>
            <div className="absolute inset-0">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" 
                    />
                ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">No Image</div>
                
                )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <div className="flex justify-between items-center text-gray-300 text-sm mt-1">
                <span>{year}</span>
                <span>⭐ {rating}</span>
                </div>

                <button onClick={() => onDelete(id)} className="mt-3 text-xs bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white">Delete</button>
            </div>
        </div>
    );
};

export default MovieCard;
