import React, { useState } from 'react'

function BookingForm({ movie, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    showtime: '',
    tickets: 1
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.date || !formData.showtime) {
      alert('Please fill in all required fields')
      return
    }

    if (formData.tickets < 1 || formData.tickets > 10) {
      alert('Please select between 1 and 10 tickets')
      return
    }

    onSubmit(formData)
  }

  const totalAmount = movie.price * formData.tickets

  return (
    <div className="booking-overlay">
      <div className="booking-form">
        <div className="form-header">
          <h2>Book Tickets for {movie.title}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Select Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="showtime">Select Showtime *</label>
              <select
                id="showtime"
                name="showtime"
                value={formData.showtime}
                onChange={handleChange}
                required
              >
                <option value="">Choose time</option>
                {movie.showtimes.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tickets">Number of Tickets</label>
            <input
              type="number"
              id="tickets"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              min="1"
              max="10"
            />
          </div>

          <div className="booking-summary">
            <div className="summary-item">
              <span>Movie:</span>
              <span>{movie.title}</span>
            </div>
            <div className="summary-item">
              <span>Price per ticket:</span>
              <span>${movie.price}</span>
            </div>
            <div className="summary-item">
              <span>Number of tickets:</span>
              <span>{formData.tickets}</span>
            </div>
            <div className="summary-item total">
              <span>Total Amount:</span>
              <span>${totalAmount}</span>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-confirm">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingForm