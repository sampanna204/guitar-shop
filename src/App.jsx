
import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [user, setUser] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    const savedCart = localStorage.getItem('cart')
    if (savedUser) setUser(JSON.parse(savedUser))
    if (savedCart) setCart(JSON.parse(savedCart))
  }, [])

  const guitars = [
    {
      id: 1,
      name: 'Mantra Karma',
      category: 'acoustic',
      price: 18500,
      image: '/attached_assets/image_1763738273431.png',
      description: 'Premium Nepalese craftsmanship with beautiful design'
    },
    {
      id: 2,
      name: 'Mantra Prakriti',
      category: 'acoustic',
      price: 22500,
      image: '/attached_assets/download_1763738284808.jpg',
      description: 'Warm tones perfect for traditional melodies'
    },
    {
      id: 3,
      name: 'Mantra Heritage',
      category: 'acoustic',
      price: 35000,
      image: '/attached_assets/image_1763738282953.png',
      description: 'Rich heritage with modern playability'
    },
    {
      id: 4,
      name: 'Mantra Headless',
      category: 'electric',
      price: 49000,
      image: '/attached_assets/download_1763738286135.jpg',
      description: 'Innovative headless design with modern appeal'
    },
    {
      id: 5,
      name: 'Sahana Huchill',
      category: 'electric',
      price: 28000,
      image: '/attached_assets/download_1763738289678.jpg',
      description: 'Classic acoustic with premium tone'
    },
    {
      id: 6,
      name: 'Sahana Bazz',
      category: 'electric',
      price: 58000,
      image: '/attached_assets/download_1763738291852.jpg',
      description: 'Unique artistic design with powerful sound'
    },
    {
      id: 7,
      name: 'Sahana Kali',
      category: 'electric',
      price: 65000,
      image: '/attached_assets/download_1763738293165.jpg',
      description: 'Rare wood finish with exceptional sustain'
    },
    {
      id: 8,
      name: 'Parth 2',
      category: 'electric',
      price: 72000,
      image: '/attached_assets/download_1763738294363.jpg',
      description: 'Modern headless design with versatile sound options'
    }
  ]

  const accessories = [
    {
      id: 101,
      name: 'Guitar Strings Set',
      category: 'accessory',
      price: 800,
      image: '/attached_assets/download_1763739328597.jpg',
      description: 'Premium quality strings for acoustic and electric'
    },
    {
      id: 102,
      name: 'Guitar Picks Pack',
      category: 'accessory',
      price: 250,
      image: '/attached_assets/download_1763739291043.jpg',
      description: 'Variety pack of premium picks'
    },
    {
      id: 103,
      name: 'Guitar Capo',
      category: 'accessory',
      price: 1200,
      image: '/attached_assets/download_1763739417125.jpg',
      description: 'Professional grade capo for perfect tuning'
    },
    {
      id: 104,
      name: 'Guitar Tuner',
      category: 'accessory',
      price: 1800,
      image: '/attached_assets/download_1763739443223.jpg',
      description: 'Digital tuner with high precision'
    },
    {
      id: 105,
      name: 'Guitar Bag',
      category: 'accessory',
      price: 2500,
      image: '/attached_assets/images_1763739393655.jpg',
      description: 'Padded protection for your instrument'
    },
    {
      id: 106,
      name: 'Guitar Stand',
      category: 'accessory',
      price: 1500,
      image: '/attached_assets/download_1763739468868.jpg',
      description: 'Sturdy and protective guitar stand'
    }
  ]

  const allProducts = [...guitars, ...accessories]

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory)

  const handleAuth = (e) => {
    e.preventDefault()
    if (authMode === 'signup') {
      const newUser = {
        name: formData.name,
        email: formData.email
      }
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      alert('Account created successfully!')
    } else {
      const newUser = {
        name: formData.name || 'User',
        email: formData.email
      }
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      alert('Logged in successfully!')
    }
    setShowAuthModal(false)
    setFormData({ email: '', password: '', name: '' })
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    alert('Logged out successfully!')
  }

  const addToCart = (product) => {
    if (!user) {
      alert('Please login to add items to cart')
      setShowAuthModal(true)
      return
    }
    const existingItem = cart.find(item => item.id === product.id)
    let newCart
    if (existingItem) {
      newCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    } else {
      newCart = [...cart, { ...product, quantity: 1 }]
    }
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    alert('Added to cart!')
  }

  const updateQuantity = (id, change) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
      }
      return item
    }).filter(Boolean)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }
    alert(`Order placed successfully! Total: NPR ${getCartTotal().toLocaleString()}\nThank you for shopping with Vintage Strings!`)
    setCart([])
    localStorage.setItem('cart', JSON.stringify([]))
    setShowCart(false)
  }

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
            <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
              🛒 Cart ({cart.length})
            </button>
            {user ? (
              <div className="user-menu">
                <span>Hi, {user.name}</span>
                <button onClick={handleLogout} className="auth-btn">Logout</button>
              </div>
            ) : (
              <button onClick={() => setShowAuthModal(true)} className="auth-btn">Login</button>
            )}
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Vintage Strings</h1>
          <p className="hero-tagline">Born from friendship and fueled by passion, Vintage Strings is where guitars speak, music lives, and creativity flows.</p>
          <button className="cta-button" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>Explore Collection</button>
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
                <span className="guitar-price">NPR {product.price.toLocaleString()}</span>
                <button className="buy-button" onClick={() => addToCart(product)}>Add to Cart</button>
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

      {showAuthModal && (
        <div className="modal-overlay" onClick={() => setShowAuthModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowAuthModal(false)}>×</button>
            <h2>{authMode === 'login' ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleAuth}>
              {authMode === 'signup' && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <button type="submit" className="submit-btn">
                {authMode === 'login' ? 'Login' : 'Sign Up'}
              </button>
            </form>
            <p className="auth-toggle">
              {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}>
                {authMode === 'login' ? 'Sign Up' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      )}

      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div className="modal-content cart-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCart(false)}>×</button>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p>NPR {item.price.toLocaleString()}</p>
                      </div>
                      <div className="cart-item-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  ))}
                </div>
                <div className="cart-total">
                  <h3>Total: NPR {getCartTotal().toLocaleString()}</h3>
                  <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
