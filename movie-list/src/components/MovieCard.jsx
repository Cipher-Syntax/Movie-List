import React from 'react';

const MovieCard = ({ id, title, image, description, genres, year, rating, onDelete }) => {

    return (
        <div className="w-80 justify-self-center-safe h-96 relative rounded-lg overflow-hidden hover:translate-y-[-10px] ease-in-out duration-[0.5s] cursor-pointer" id='movies'>
            <div className="absolute inset-0">
                {
                    image ? (
                        <img src={image} alt={title} className="w-full h-full object-cover object-top hover:brightness-50" />
                    ) : 
                    (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">No Image</div>
                    )
                }
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <p className="text-gray-300 text-justify line-clamp-3 text-[13px]">
                    {description}
                </p>

                {genres && genres.length > 0 && (
                    <p className="text-sm text-gray-400 mt-1">{genres.join(', ')}</p>
                )}
                <div className="flex justify-between items-center text-gray-300 text-sm mt-1">
                    <span>{year}</span>
                    <span>⭐ {rating}</span>
                </div>

                <button onClick={() => onDelete(id)} className="mt-3 text-[12px] bg-red-500 hover:bg-red-600 px-3 py-3 tracking-widest font-bold rounded text-white cursor-pointer w-full">Delete</button>
            </div>
        </div>
    );
};

export default MovieCard;
