import React, { useState, useEffect } from 'react'
import { Headers, HeroSection } from '../components';
import { MovieCard } from '../components';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

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

    // Filter movies
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='min-h-screen bg-black text-white relative overflow-hidden'>
            <Headers />
            <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {filteredMovies.length === 0 ? (
                <p className='text-center my-10'>No Movies found</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 md:px-20 w-full mx-auto">
                    {filteredMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
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
