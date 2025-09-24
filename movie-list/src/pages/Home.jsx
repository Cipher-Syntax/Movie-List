import React, { useState, useEffect } from 'react'
import { Headers, HeroSection } from '../components';
import { MovieCard } from '../components';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredGenre, setFilteredGenre] = useState('All')

    // Load movies
    useEffect(() => {
        const storedMovie = JSON.parse(localStorage.getItem("movies")) || [];
        if (storedMovie.length > 0) {
            setMovies(storedMovie);
        }
    }, []);

    // Save movies
    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    const deleteMovie = (id) => {
        const updatedMovies = movies.filter((movie) => movie.id !== id);
        setMovies(updatedMovies);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
    };

    const genresToFilter = ['All', ...new Set(movies.map(movie => movie.genres || []).flat())] 

    // Filter movies
    const filteredMovies = movies.filter((movie) => {
        const movieFiltered = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
        const genreFiltered = filteredGenre === "All" || (movie.genres && movie.genres.includes(filteredGenre));

        return movieFiltered && genreFiltered;
    
    });

    return (
        <div className='min-h-screen bg-black text-white relative overflow-hidden'>
            <Headers />
            <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            <div className="flex justify-start my-6 px-30">
                <select value={filteredGenre} onChange={(e) => setFilteredGenre(e.target.value)} className="px-4 py-2 bg-gray-800 text-white rounded-md w-[200px]">
                    {genresToFilter.map((genre, index) => (
                        <option key={index} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            {filteredMovies.length === 0 ? (
                <p className='text-center my-10'>No Movies found</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 md:px-20 w-full mx-auto">
                    {filteredMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            description={movie.description}
                            genres={movie.genres}
                            image={movie.image}
                            year={movie.year}
                            rating={movie.rating}
                            onDelete={deleteMovie}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;
