import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, HelpCircle } from 'lucide-react';
import './Contact.css'; // Make sure this import is here

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Phone Support",
      details: ["+91 44 4224 4224", "+91 422 4224 4224"],
      availability: "Mon-Sun: 9:00 AM - 10:00 PM"
    },
    {
      icon: <Mail className="text-green-600" size={24} />,
      title: "Email Support",
      details: ["support@moviebooking.com", "bookings@moviebooking.com"],
      availability: "Response within 24 hours"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Head Office",
      details: ["123 Cinema Street", "T. Nagar, Chennai - 600017"],
      availability: "Mon-Fri: 10:00 AM - 6:00 PM"
    }
  ];

  const faqItems = [
    {
      question: "How can I cancel my booking?",
      answer: "You can cancel your booking up to 2 hours before the show time through the 'My Bookings' section."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets."
    },
    {
      question: "Can I modify my seat selection after booking?",
      answer: "Seat modifications are subject to availability and can be done up to 1 hour before the show."
    },
    {
      question: "Do you offer refunds for cancelled shows?",
      answer: "Yes, full refunds are provided for shows cancelled by the theater. Processing takes 5-7 business days."
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">We're here to help with any questions or concerns</p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form fade-in">
            <h2 className="form-header">
              <MessageCircle className="text-blue-600" size={24} />
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="type" className="form-label">
                  Inquiry Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Support</option>
                  <option value="technical">Technical Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="refund">Refund Request</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-textarea"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="form-button">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            {/* Contact Methods */}
            {contactInfo.map((contact, index) => (
              <div key={index} className={`contact-card fade-in-delay-${index + 1}`}>
                <div className="contact-card-content">
                  <div className="contact-icon">
                    {contact.icon}
                  </div>
                  <div className="contact-details">
                    <h3>{contact.title}</h3>
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex}>{detail}</p>
                    ))}
                    <div className="contact-availability">
                      <Clock size={14} />
                      <span>{contact.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* FAQ Section */}
            <div className="faq-section fade-in-delay-3">
              <h3 className="faq-header">
                <HelpCircle className="text-purple-600" size={24} />
                Frequently Asked Questions
              </h3>
              <div className="faq-list">
                {faqItems.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h4 className="faq-question">{faq.question}</h4>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="emergency-contact fade-in-delay-3">
              <h3 className="emergency-title">Emergency Contact</h3>
              <p className="emergency-description">
                For urgent issues during movie hours or emergencies at theaters:
              </p>
              <p className="emergency-number">+91 90000 00000</p>
              <p className="emergency-availability">Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;