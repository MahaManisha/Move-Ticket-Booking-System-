import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, MapPin, Star } from 'lucide-react';

const Home = () => {
  const featuredMovies = [
    {
      id: 1,
      title: "Spider-Man: No Way Home",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=300&h=400&fit=crop",
      rating: 8.4,
      genre: "Action, Adventure"
    },
    {
      id: 2,
      title: "Dune",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
      rating: 8.1,
      genre: "Sci-Fi, Drama"
    },
    {
      id: 3,
      title: "No Time to Die",
      image: "https://images.unsplash.com/photo-1489599849473-66c8943692b2?w=300&h=400&fit=crop",
      rating: 7.3,
      genre: "Action, Thriller"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Your Ultimate Movie Experience
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book tickets for the latest blockbusters and indie films. 
            Discover showtimes, reserve your seats, and enjoy the magic of cinema.
          </p>
          <div className="space-x-4">
            <Link 
              to="/movies" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 inline-flex items-center gap-2"
            >
              <Play size={20} />
              Browse Movies
            </Link>
            <Link 
              to="/theaters" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 inline-flex items-center gap-2"
            >
              <MapPin size={20} />
              Find Theaters
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Movies Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Now Showing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredMovies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img 
                src={movie.image} 
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-600 mb-3">{movie.genre}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={16} fill="currentColor" />
                    <span className="font-medium">{movie.rating}</span>
                  </div>
                  <Link 
                    to="/movies" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Calendar className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold mb-3">Easy Booking</h3>
              <p className="text-gray-600">
                Quick and hassle-free ticket booking with just a few clicks. 
                Select your seats and payment method easily.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <MapPin className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold mb-3">Multiple Locations</h3>
              <p className="text-gray-600">
                Find theaters near you with our comprehensive location finder. 
                We partner with theaters across the city.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Star className="mx-auto mb-4 text-yellow-600" size={48} />
              <h3 className="text-xl font-semibold mb-3">Best Experience</h3>
              <p className="text-gray-600">
                Premium sound systems, comfortable seating, and the latest 
                projection technology for an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
