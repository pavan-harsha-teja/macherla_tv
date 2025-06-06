import React, { useState, useEffect } from 'react';
import srinath from './assets/Srinath.jpg';
import gopi from './assets/Gopi.jpg';
import srinivasaRao from './assets/DAD.jpg';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'remotes', 'spare', 'delivery', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="header">
        <button 
          className="nav-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <div className={`overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
        <div className="header-content">
          <h1>Sri Maruthi Electronics</h1>
          <p className="tagline">Your trusted electronics solution provider in Macherla</p>
          <div className="contact-banner">
            <a href="tel:8341751105" className="contact-link">
              <i className="fas fa-phone"></i> Call Now: 8341751105
            </a>
            <span className="divider">|</span>
            <span className="location">
              <i className="fas fa-map-marker-alt"></i> Near Navaranga Bakery, Macherla, Palnadu District
            </span>
          </div>
        </div>
      </header>

      <div className="layout">
        <nav className={`sidebar ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="logo-container">
            <div className="logo-placeholder">SME</div>
            <span>Sri Maruthi Electronics</span>
          </div>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a href="#home" onClick={() => handleNavClick('home')}>
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about" onClick={() => handleNavClick('about')}>
                <i className="fas fa-info-circle"></i> About
              </a>
            </li>
            <li className={activeSection === 'services' ? 'active' : ''}>
              <a href="#services" onClick={() => handleNavClick('services')}>
                <i className="fas fa-tools"></i> Services
              </a>
            </li>
            <li className={activeSection === 'remotes' ? 'active' : ''}>
              <a href="#remotes" onClick={() => handleNavClick('remotes')}>
                <i className="fas fa-tv"></i> Remotes
              </a>
            </li>
            <li className={activeSection === 'spare' ? 'active' : ''}>
              <a href="#spare" onClick={() => handleNavClick('spare')}>
                <i className="fas fa-microchip"></i> Spare Parts
              </a>
            </li>
            <li className={activeSection === 'delivery' ? 'active' : ''}>
              <a href="#delivery" onClick={() => handleNavClick('delivery')}>
                <i className="fas fa-truck"></i> Delivery
              </a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={() => handleNavClick('contact')}>
                <i className="fas fa-address-card"></i> Contact
              </a>
            </li>
          </ul>
          <div className="sidebar-footer">
            <p>Open: Mon-Sat</p>
            <p>9:00 AM - 8:00 PM</p>
          </div>
        </nav>

        <main className="main">
          <section id="home" className="section hero">
            <div className="hero-content">
              <h2>Quality Electronics Solutions</h2>
              <p className="hero-text">
                Your trusted destination for all electronic repairs, remote controls, and spare parts in <strong>Macherla</strong>.
                We're committed to quality service and customer satisfaction with over 15 years of experience.
              </p>
              <a href="#contact" className="cta-button">Contact Us Today</a>
            </div>
          </section>

          <section id="about" className="section">
            <h2><i className="fas fa-store-alt section-icon"></i> About Our Shop</h2>
            <div className="about-content">
              <p>
                <strong>Sri Maruthi Electronics</strong> is a well-established electronics shop serving Macherla since 2008.
                We specialize in electronic repairs, remote programming, and providing quality spare parts.
              </p>
              <div className="features-grid">
                <div className="feature-card">
                  <i className="fas fa-clock"></i>
                  <h3>15+ Years Experience</h3>
                  <p>Trusted service with extensive knowledge</p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-check-circle"></i>
                  <h3>Quality Assurance</h3>
                  <p>Genuine parts and reliable service</p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-home"></i>
                  <h3>Home Service</h3>
                  <p>Convenient doorstep repairs</p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-rupee-sign"></i>
                  <h3>Affordable Prices</h3>
                  <p>Competitive and transparent pricing</p>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="section">
            <h2><i className="fas fa-tools section-icon"></i> Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-tv"></i>
                </div>
                <h3>Electronic Repairs</h3>
                <ul>
                  <li>Television repairs</li>
                  <li>Audio system fixes</li>
                  <li>Small appliance repairs</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-gamepad"></i>
                </div>
                <h3>Remote Services</h3>
                <ul>
                  <li>Remote programming</li>
                  <li>Replacement remotes</li>
                  <li>Universal remote setup</li>
                </ul>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-microchip"></i>
                </div>
                <h3>Spare Parts</h3>
                <ul>
                  <li>Genuine components</li>
                  <li>Batteries & accessories</li>
                  <li>Hard-to-find parts</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="remotes" className="section">
            <h2><i className="fas fa-tv section-icon"></i> Remote Solutions</h2>
            <div className="remote-types">
              <div className="remote-card">
                <i className="fas fa-tv"></i>
                <h3>TV Remotes</h3>
                <p>All brands available</p>
              </div>
              <div className="remote-card">
                <i className="fas fa-snowflake"></i>
                <h3>AC Remotes</h3>
                <p>Original & universal</p>
              </div>
              <div className="remote-card">
                <i className="fas fa-satellite-dish"></i>
                <h3>Set-top Box</h3>
                <p>Cable & DTH remotes</p>
              </div>
              <div className="remote-card">
                <i className="fas fa-car"></i>
                <h3>Car Remotes</h3>
                <p>Key fob programming</p>
              </div>
            </div>
            <div className="brands-banner">
              <p>We service all major brands including Samsung, LG, Sony, Voltas, and more</p>
            </div>
          </section>

          <section id="spare" className="section contact-section">
            <h2><i className="fas fa-microchip section-icon"></i> Spare Parts</h2>
            <div className="contact-card">
              <div className="contact-image">
                <img src={srinath} alt="G. Srinath" />
              </div>
              <div className="contact-info">
                <h3>Spare Parts Specialist</h3>
                <p>We provide genuine, high-quality spare parts for your electronics with warranty.</p>
                <div className="contact-details">
                  <p><strong>Contact:</strong> G. Srinath</p>
                  <p><strong>Phone:</strong> <a href="tel:9133709740" className="phone-link">9133709740</a></p>
                  <p><strong>Hours:</strong> 9:00 AM - 8:00 PM</p>
                </div>
                <a href="tel:9133709740" className="cta-button-small">
                  <i className="fas fa-phone"></i> Call for Parts
                </a>
              </div>
            </div>
          </section>

          <section id="delivery" className="section contact-section">
            <h2><i className="fas fa-truck section-icon"></i> Home Delivery & Repairs</h2>
            <div className="contact-card">
              <div className="contact-image">
                <img src={gopi} alt="G. Gopi" />
              </div>
              <div className="contact-info">
                <h3>Doorstep Service Available</h3>
                <p>We offer fast home delivery and convenient doorstep repair services throughout Macherla.</p>
                <div className="contact-details">
                  <p><strong>Contact:</strong> G. Gopi</p>
                  <p><strong>Phone:</strong> <a href="tel:7396179896" className="phone-link">7396179896</a></p>
                  <p><strong>Service Area:</strong> Macherla & nearby villages</p>
                </div>
                <a href="tel:7396179896" className="cta-button-small">
                  <i className="fas fa-phone"></i> Schedule Service
                </a>
              </div>
            </div>
          </section>

          <section id="contact" className="section contact-section">
            <h2><i className="fas fa-address-card section-icon"></i> Contact Us</h2>
            <div className="contact-card">
              <div className="contact-image">
                <img src={srinivasaRao} alt="G. Srinivasa Rao" />
              </div>
              <div className="contact-info">
                <h3>Visit Our Shop</h3>
                <p>For all your electronic needs, visit our shop in Macherla or call us for assistance.</p>
                <div className="contact-details">
                  <p><strong>Owner:</strong> G. Srinivasa Rao</p>
                  <p><strong>Phone:</strong> <a href="tel:8341751105" className="phone-link">8341751105</a></p>
                  <p><strong>Address:</strong> Near Navaranga Bakery, Macherla, Palnadu District</p>
                  <p><strong>Hours:</strong> Monday-Saturday, 9:00 AM - 8:00 PM</p>
                </div>
                <div className="contact-buttons">
                  <a href="tel:8341751105" className="cta-button-small">
                    <i className="fas fa-phone"></i> Call Now
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="cta-button-small outline">
                    <i className="fas fa-map-marker-alt"></i> Get Directions
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sri Maruthi Electronics</h3>
            <p>Your trusted electronics solution provider in Macherla since 2008.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#remotes">Remotes</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p><i className="fas fa-phone"></i> 8341751105</p>
            <p><i className="fas fa-map-marker-alt"></i> Near Navaranga Bakery, Macherla</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sri Maruthi Electronics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;