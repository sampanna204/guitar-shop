import { useState } from 'react'
import './App.css'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const guitars = [
    {
      id: 1,
      name: 'Classic Acoustic',
      category: 'acoustic',
      price: '$899',
      image: '🎸',
      description: 'Warm, rich tones'
    },
    {
      id: 2,
      name: 'Electric Legend',
      category: 'electric',
      price: '$1,299',
      image: '🎸',
      description: 'Rock & roll ready'
    },
    {
      id: 3,
      name: 'Vintage Sunburst',
      category: 'electric',
      price: '$1,499',
      image: '🎸',
      description: 'Timeless classic'
    },
    {
      id: 4,
      name: 'Folk Dreamer',
      category: 'acoustic',
      price: '$749',
      image: '🎸',
      description: 'Perfect for storytelling'
    },
    {
      id: 5,
      name: 'Jazz Master',
      category: 'electric',
      price: '$1,799',
      image: '🎸',
      description: 'Smooth & sophisticated'
    },
    {
      id: 6,
      name: 'Steel String Pro',
      category: 'acoustic',
      price: '$999',
      image: '🎸',
      description: 'Crystal clear sound'
    }
  ]

  const filteredGuitars = selectedCategory === 'all' 
    ? guitars 
    : guitars.filter(g => g.category === selectedCategory)

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Vintage Strings</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#guitars">Guitars</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Sound</h1>
          <p className="hero-subtitle">Handpicked guitars for every soul and style</p>
          <button className="cta-button">Explore Collection</button>
        </div>
        <div className="hero-decoration">
          <div className="float-icon">♪</div>
          <div className="float-icon">♫</div>
          <div className="float-icon">♪</div>
        </div>
      </section>

      <section className="guitars-section" id="guitars">
        <div className="section-header">
          <h2 className="section-title">Our Collection</h2>
          <p className="section-subtitle">Each instrument tells a story</p>
        </div>

        <div className="filter-buttons">
          <button 
            className={selectedCategory === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('all')}
          >
            All Guitars
          </button>
          <button 
            className={selectedCategory === 'acoustic' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('acoustic')}
          >
            Acoustic
          </button>
          <button 
            className={selectedCategory === 'electric' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('electric')}
          >
            Electric
          </button>
        </div>

        <div className="guitars-grid">
          {filteredGuitars.map(guitar => (
            <div key={guitar.id} className="guitar-card">
              <div className="guitar-icon">{guitar.image}</div>
              <h3 className="guitar-name">{guitar.name}</h3>
              <p className="guitar-description">{guitar.description}</p>
              <div className="guitar-footer">
                <span className="guitar-price">{guitar.price}</span>
                <button className="buy-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Crafted With Passion</h2>
            <p className="about-description">
              For over 30 years, we've been connecting musicians with their perfect instruments. 
              Every guitar in our collection is carefully selected for its tone, craftsmanship, 
              and soul.
            </p>
            <p className="about-description">
              Whether you're strumming your first chord or performing on stage, we believe 
              the right guitar can inspire your journey.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Quality Guaranteed</h3>
              <p>Every instrument inspected</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Expert Guidance</h3>
              <p>Passionate team ready to help</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Lifetime Support</h3>
              <p>We're here for your journey</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vintage Strings</h3>
            <p>Where music comes alive</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>info@vintagestrings.com</p>
            <p>(555) 123-4567</p>
          </div>
          <div className="footer-section">
            <h4>Visit Us</h4>
            <p>123 Music Lane</p>
            <p>Nashville, TN 37201</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Vintage Strings. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
