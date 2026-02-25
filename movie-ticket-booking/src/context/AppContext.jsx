import React, { createContext, useState, useEffect } from "react";
import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  
  const movies = [
    {
      id: 1,
      title: "Coolie",
      genre: "Action",
      duration: "3h 12m",
      rating: "PG-13",
      description: "A courageous railway worker fights against corruption and injustice in a thrilling tale.",
      showtimes: ["10:00 AM", "2:00 PM", "6:00 PM", "9:30 PM"],
      price: 15,
      image: movie1,
      status: "Now Showing"
    },
    {
      id: 2,
      title: "Thailaivan Thailavi",
      genre: "Drama",
      duration: "2h 11m",
      rating: "PG-13",
      description: "An emotional journey of leadership and the sacrifices made for the people.",
      showtimes: ["11:00 AM", "3:00 PM", "7:00 PM", "10:00 PM"],
      price: 12,
      image: movie2,
      status: "Now Showing"
    },
    {
      id: 3,
      title: "Vikram",
      genre: "Action, Thriller",
      duration: "2h 55m",
      rating: "R",
      description: "A special agent uncovers a massive conspiracy intersecting with a powerful drug cartel.",
      showtimes: ["10:30 AM", "1:30 PM", "5:00 PM", "8:45 PM"],
      price: 18,
      image: movie3,
      status: "Now Showing"
    },
    {
      id: 4,
      title: "Leo",
      genre: "Action, Crime",
      duration: "2h 44m",
      rating: "R",
      description: "A mild-mannered cafe owner's past catches up with him, bringing a cartel to his doorstep.",
      showtimes: ["9:00 AM", "12:30 PM", "4:00 PM", "7:30 PM", "11:00 PM"],
      price: 16,
      image: movie4,
      status: "Coming Soon"
    }
  ];

  const theaters = [
    {
      id: 1,
      name: "PVR Cinemas - Phoenix Mall",
      location: "Chennai",
      amenities: ["IMAX", "Dolby Atmos", "Recliners"]
    },
    {
      id: 2,
      name: "INOX Leisure - Express Avenue",
      location: "Chennai",
      amenities: ["4DX", "Dolby 7.1", "Food Court"]
    },
    {
      id: 3,
      name: "AGS Cinemas - T. Nagar",
      location: "Chennai",
      amenities: ["RGB Laser", "Dolby Atmos", "Parking"]
    }
  ];

  const handleBookMovie = (bookingData) => {
    const newBooking = {
      id: Date.now(),
      bookingId: `BK${Math.floor(Math.random() * 100000000)}`,
      status: "confirmed",
      ...bookingData,
    };
    setBookings((prev) => [...prev, newBooking]);
    return newBooking;
  };

  const handleCancelBooking = (bookingId) => {
    setBookings((prev) => prev.filter(b => b.bookingId !== bookingId));
  };

  return (
    <AppContext.Provider value={{
      user, setUser,
      movies, theaters,
      bookings, handleBookMovie, handleCancelBooking
    }}>
      {children}
    </AppContext.Provider>
  );
};
