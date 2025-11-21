import { useState } from 'react'
import './App.css'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const guitars = [
    {
      id: 1,
      name: 'Mantra Karma',
      category: 'acoustic',
      price: 'NPR 18,500',
      image: '/attached_assets/images_1763737388792.jpg',
      description: 'Premium Nepalese craftsmanship with beautiful design'
    },
    {
      id: 2,
      name: 'Mantra Prakriti',
      category: 'electric',
      price: 'NPR 49,000',
      image: '/attached_assets/download_1763737335525.jpg',
      description: 'Stunning blue electric guitar with exceptional tone'
    },
    {
      id: 3,
      name: 'Mantra Heritage',
      category: 'acoustic',
      price: 'NPR 22,500',
      image: '/attached_assets/download_1763737298828.jpg',
      description: 'Warm tones perfect for traditional melodies'
    },
    {
      id: 4,
      name: 'Mantra Headless',
      category: 'acoustic',
      price: 'NPR 35,000',
      image: '/attached_assets/download_1763737307412.jpg',
      description: 'Innovative headless design with modern appeal'
    },
    {
      id: 5,
      name: 'Sahana Huchill',
      category: 'electric',
      price: 'NPR 65,000',
      image: '/attached_assets/download_1763737341000.jpg',
      description: 'High-end electric with stunning finish'
    },
    {
      id: 6,
      name: 'Sahana Bazz',
      category: 'electric',
      price: 'NPR 58,000',
      image: '/attached_assets/download_1763737314152.jpg',
      description: 'Unique artistic design with powerful sound'
    },
    {
      id: 7,
      name: 'Sahana Kali',
      category: 'electric',
      price: 'NPR 72,000',
      image: '/attached_assets/download_1763737408999.jpg',
      description: 'Rare wood finish with exceptional sustain'
    },
    {
      id: 8,
      name: 'Parth 2',
      category: 'electric',
      price: 'NPR 45,000',
      image: '/attached_assets/rudraright_1763737286030.webp',
      description: 'Modern design with versatile sound options'
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
          <h1 className="hero-title">Discover Your Perfect Melody</h1>
          <p className="hero-subtitle">Exquisite guitars handcrafted for the discerning musician</p>
          <p className="hero-description">From the bustling streets of Kathmandu to your fingertips - experience the finest collection of acoustic and electric guitars, each telling its own unique story</p>
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
              <img src={guitar.image} alt={guitar.name} className="guitar-icon" />
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
            <p>vintagestring@gmail.com</p>
            <p>+977 9712345678</p>
          </div>
          <div className="footer-section">
            <h4>Visit Us</h4>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Vintage Strings. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
