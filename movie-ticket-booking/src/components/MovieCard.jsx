import React from 'react'

function MovieCard({ movie, onBook }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.image} alt={movie.title} />
        <div className="movie-overlay">
          <button className="btn-book" onClick={onBook}>
            Book Now
          </button>
        </div>
      </div>
      
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span className="genre">{movie.genre}</span>
          <span className="duration">{movie.duration}</span>
          <span className="rating">{movie.rating}</span>
        </div>
        <p className="description">{movie.description}</p>
        <div className="showtimes">
          <h4>Showtimes:</h4>
          <div className="times">
            {movie.showtimes.map((time, index) => (
              <span key={index} className="time-slot">{time}</span>
            ))}
          </div>
        </div>
        <div className="price">${movie.price} per ticket</div>
      </div>
    </div>
  )
}

export default MovieCard