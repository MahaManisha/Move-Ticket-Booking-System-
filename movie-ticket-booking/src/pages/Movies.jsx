import React, { useState } from "react";
import { Star, Clock, Calendar } from "lucide-react";

// ✅ Import your movie posters (place images inside src/assets/)
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";
import movie6 from "../assets/movie6.jpg";
import movie7 from "../assets/movie7.jpg";
import movie8 from "../assets/movie8.jpg";
import movie9 from "../assets/movie9.jpg";

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    {
      id: 1,
      title: "விக்ரம் (Vikram)",
      image: movie3,
      rating: 8.7,
      duration: "175 min",
      genre: "action",
      genreDisplay: "Action, Thriller",
      language: "Tamil",
      showtimes: ["10:30 AM", "2:00 PM", "6:30 PM", "10:00 PM"],
    },
    {
      id: 2,
      title: "லியோ (Leo)",
      image: movie4,
      rating: 8.5,
      duration: "165 min",
      genre: "action",
      genreDisplay: "Action, Thriller",
      language: "Tamil",
      showtimes: ["11:00 AM", "3:00 PM", "7:30 PM"],
    },
    {
      id: 3,
      title: "கைதி 2 (Kaithi 2)",
      image: movie5,
      rating: 8.4,
      duration: "160 min",
      genre: "action",
      genreDisplay: "Crime, Thriller",
      language: "Tamil",
      showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
    },
    {
      id: 4,
      title: "ஜவான் (Jawan)",
      image: movie6,
      rating: 8.3,
      duration: "170 min",
      genre: "action",
      genreDisplay: "Action, Drama",
      language: "Tamil",
      showtimes: ["10:15 AM", "1:30 PM", "6:00 PM", "9:30 PM"],
    },
    {
      id: 5,
      title: "மாஸ்டர் (Master)",
      image: movie7,
      rating: 7.8,
      duration: "179 min",
      genre: "action",
      genreDisplay: "Action, Drama",
      language: "Tamil",
      showtimes: ["9:45 AM", "1:15 PM", "5:45 PM", "10:15 PM"],
    },
    {
      id: 6,
      title: "பொனியின் செல்வன் (Ponniyin Selvan)",
      image: movie8,
      rating: 7.6,
      duration: "168 min",
      genre: "epic",
      genreDisplay: "Epic, Historical",
      language: "Tamil",
      showtimes: ["10:00 AM", "2:00 PM", "6:30 PM"],
    },
    {
      id: 7,
      title: "வாரிசு (Varisu)",
      image: movie9,
      rating: 7.2,
      duration: "165 min",
      genre: "drama",
      genreDisplay: "Family, Drama",
      language: "Tamil",
      showtimes: ["11:15 AM", "3:15 PM", "7:45 PM"],
    },
  ];

  const genres = [
    { value: "all", label: "All Genres" },
    { value: "action", label: "Action" },
    { value: "comedy", label: "Comedy" },
    { value: "drama", label: "Drama" },
    { value: "sci-fi", label: "Sci-Fi" },
  ];

  const filteredMovies = movies.filter((movie) => {
    const matchesGenre =
      selectedGenre === "all" || movie.genre === selectedGenre;
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const handleBooking = (movieTitle, showtime) => {
    alert(
      `Booking ${movieTitle} for ${showtime}. This would redirect to seat selection page.`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Now Showing
          </h1>
          <p className="text-gray-600 text-lg">
            Discover and book tickets for the latest movies
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {genres.map((genre) => (
                  <option key={genre.value} value={genre.value}>
                    {genre.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Star
                      className="text-yellow-400"
                      size={16}
                      fill="currentColor"
                    />
                    <span>{movie.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{movie.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{movie.genreDisplay}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Language: {movie.language}
                </p>

                {/* Showtimes */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2 flex items-center gap-1">
                    <Calendar size={16} />
                    Today's Showtimes
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {movie.showtimes.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => handleBooking(movie.title, time)}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-2 rounded text-sm font-medium transition duration-300"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition duration-300">
                  Book Tickets
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No movies found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
