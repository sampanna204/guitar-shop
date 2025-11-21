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
      image: '/attached_assets/image_1763738273431.png',
      description: 'Premium Nepalese craftsmanship with beautiful design'
    },
    {
      id: 2,
      name: 'Mantra Prakriti',
      category: 'acoustic',
      price: 'NPR 22,500',
      image: '/attached_assets/download_1763738284808.jpg',
      description: 'Warm tones perfect for traditional melodies'
    },
    {
      id: 3,
      name: 'Mantra Heritage',
      category: 'electric',
      price: 'NPR 35,000',
      image: '/attached_assets/image_1763738282953.png',
      description: 'Rich heritage with modern playability'
    },
    {
      id: 4,
      name: 'Mantra Headless',
      category: 'electric',
      price: 'NPR 49,000',
      image: '/attached_assets/download_1763738286135.jpg',
      description: 'Innovative headless design with modern appeal'
    },
    {
      id: 5,
      name: 'Sahana Huchill',
      category: 'acoustic',
      price: 'NPR 28,000',
      image: '/attached_assets/download_1763738289678.jpg',
      description: 'Classic acoustic with premium tone'
    },
    {
      id: 6,
      name: 'Sahana Bazz',
      category: 'electric',
      price: 'NPR 58,000',
      image: '/attached_assets/download_1763738291852.jpg',
      description: 'Unique artistic design with powerful sound'
    },
    {
      id: 7,
      name: 'Sahana Kali',
      category: 'electric',
      price: 'NPR 65,000',
      image: '/attached_assets/download_1763738293165.jpg',
      description: 'Rare wood finish with exceptional sustain'
    },
    {
      id: 8,
      name: 'Parth 2',
      category: 'electric',
      price: 'NPR 72,000',
      image: '/attached_assets/download_1763738294363.jpg',
      description: 'Modern headless design with versatile sound options'
    }
  ]

  const accessories = [
    {
      id: 101,
      name: 'Guitar Strings Set',
      category: 'accessory',
      price: 'NPR 800',
      image: '/attached_assets/images_1763737388792.jpg',
      description: 'Premium quality strings for acoustic and electric'
    },
    {
      id: 102,
      name: 'Guitar Picks Pack',
      category: 'accessory',
      price: 'NPR 250',
      image: '/attached_assets/download_1763737335525.jpg',
      description: 'Variety pack of premium picks'
    },
    {
      id: 103,
      name: 'Guitar Capo',
      category: 'accessory',
      price: 'NPR 1,200',
      image: '/attached_assets/download_1763737298828.jpg',
      description: 'Professional grade capo for perfect tuning'
    },
    {
      id: 104,
      name: 'Guitar Stand',
      category: 'accessory',
      price: 'NPR 1,500',
      image: '/attached_assets/download_1763737307412.jpg',
      description: 'Sturdy and protective guitar stand'
    },
    {
      id: 105,
      name: 'Guitar Bag',
      category: 'accessory',
      price: 'NPR 2,500',
      image: '/attached_assets/download_1763737341000.jpg',
      description: 'Padded protection for your instrument'
    },
    {
      id: 106,
      name: 'Tuner',
      category: 'accessory',
      price: 'NPR 1,800',
      image: '/attached_assets/download_1763737314152.jpg',
      description: 'Digital tuner with high precision'
    }
  ]

  const allProducts = [...guitars, ...accessories]

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory)

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Vintage Strings</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
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

      <section className="guitars-section" id="products">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Guitars & Accessories for every musician</p>
        </div>

        <div className="filter-buttons">
          <button 
            className={selectedCategory === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('all')}
          >
            All Products
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
          <button 
            className={selectedCategory === 'accessory' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setSelectedCategory('accessory')}
          >
            Accessories
          </button>
        </div>

        <div className="guitars-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="guitar-card">
              <img src={product.image} alt={product.name} className="guitar-icon" />
              <h3 className="guitar-name">{product.name}</h3>
              <p className="guitar-description">{product.description}</p>
              <div className="guitar-footer">
                <span className="guitar-price">{product.price}</span>
                <button className="buy-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Vintage Strings</h2>
            <p className="about-story">
              Vintage Strings began as a spark between Sampanna and Kurana, growing into a creative circle shaped by the quiet strength of Namuna, the steady rhythm of Paurakh, the calm tone of Simrika, and the bright spark of Ashika. Together, we've built more than a guitar shop — we've created a space where music feels personal, where craftsmanship meets emotion, and where every guitar carries its own story. Step inside, feel the vibe, and let your sound find its home.
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
