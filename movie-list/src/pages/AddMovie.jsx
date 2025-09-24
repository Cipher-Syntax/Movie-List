import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const AddMovie = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [genres, setGenres] = useState([]);
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");
    const [message, setMessage] = useState('');

    const genreOptions = ['Adventure', 'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Mystery', 'Thriller']

    const handleGenre = (genre) => {
        setGenres((prev) => prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !year || !rating) {
            alert("Please fill all required fields!");
            return;
        }

        if (!image) {
            alert("Please upload an image!");
            return;
        }

        try {
            const reader = new FileReader();

            reader.onload = () => {
                const base64Image = reader.result;
                const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];

                const newMovie = {
                    id: Date.now(),
                    title,
                    description,
                    genres,
                    image: base64Image,
                    year: parseInt(year),
                    rating: parseFloat(rating),
                };

                localStorage.setItem("movies", JSON.stringify([newMovie, ...storedMovies]));
                setMessage("Successfully created a movie");
                setTimeout(() => { setMessage("") }, 2000)
                setTitle('');
                setDescription('');
                setGenres([]);
                setImage(null);
                setYear('');
                setRating('');
            };

            reader.readAsDataURL(image);
        }
        catch (error) {
            console.error("Failed to save movie: ", error);
            setMessage("Failed to create a movie");
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-[20px] text-black">
            {/* Back Button */}
            <button onClick={() => window.history.back()}  className="flex items-center text-red-400 mb-4 cursor-pointer">
                <IoIosArrowRoundBack size={30} /> Back
            </button>

            <h1 className="text-2xl font-bold mb-5">Create Movie</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 rounded"
                    required
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 rounded h-32"
                />

                <div className="flex flex-col gap-2">
                    <p className="font-semibold">Select Genre(s):</p>
                    <div className="flex flex-wrap gap-4">
                        {
                            genreOptions.map((genre) => (
                                <label key={genre} className="flex items-center gap-2">
                                    <input type="checkbox" checked={genres.includes(genre)} onChange={() => handleGenre(genre)}/>
                                    {genre}
                                </label>
                            ))
                        }
                    </div>
                </div>

                <div onClick={() => document.getElementById("fileInput").click()} className="w-full h-[200px] border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 cursor-pointer">
                    <span>{image ? image.name : "Drag & Drop or Click to Upload"}</span>
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="hidden"
                    />
                </div>


                <input
                    type="number"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="number"
                    step="0.1"
                    max="5"
                    placeholder="Rating (0 - 5)"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="border p-2 rounded"
                    required
                />

                <button
                    type="submit"
                    className="bg-red-400 text-white font-bold p-2 rounded hover:bg-red-500"
                    >
                    Create Movie
                </button>
            </form>

            {message && (
                <p className={`mt-4 text-center ${message.includes("Successfully") ? "text-green-400" : "text-red-500"}`}>
                {message}
                </p>
            )}
        </div>
    );
};

export default AddMovie;
