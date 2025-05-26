import React from 'react';
import srinath from './assets/Srinath.jpg';
import gopi from './assets/Gopi.jpg';
import srinivasaRao from './assets/DAD.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Sri Maruthi Electronics</h1>
        <p>Near Navaranga Bakery, Macherla, Palnadu District</p>
      </header>

      <div className="layout">
        <nav className="sidebar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#remotes">Remotes</a></li>
            <li><a href="#spare">Spare Parts</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <main className="main">
          <section id="home" className="section">
            <h2>Welcome</h2>
            <p>
              Welcome to <strong>Sri Maruthi Electronics Shop</strong>, your trusted destination for all your
              electronic and remote control needs in <strong>Macherla</strong>. We’re committed to quality
              service and customer satisfaction.
            </p>
          </section>

          <section id="about" className="section">
            <h2>About the Shop</h2>
            <p>
              <strong>Sri Maruthi Electronics Shop</strong> is a well-established outlet serving
              Macherla with quality electronics and remote solutions.
            </p>
            <ul>
              <li>Experienced in electronic repair & remote programming</li>
              <li>Wide range of high-quality electronics</li>
              <li>Trusted home delivery service</li>
              <li>Affordable & reliable solutions</li>
            </ul>
          </section>

          <section id="services" className="section">
            <h2>Our Services</h2>
            <ul>
              <li>Electronic device repairs</li>
              <li>Remote control programming</li>
              <li>Custom electronics solutions</li>
              <li>Diagnostics & troubleshooting</li>
            </ul>
          </section>

          <section id="remotes" className="section">
            <h2>Available Remotes</h2>
            <ul>
              <li>TV Remotes</li>
              <li>AC Remotes</li>
              <li>Set-top Box Remotes</li>
              <li>Car Remotes</li>
              <li>Universal Remotes</li>
            </ul>
          </section>

          <section id="spare" className="section contact-card">
            <h2>Spare Parts</h2>
            <p>We provide genuine, high-quality spare parts for your electronics.</p>
            <div className="contact-details">
              <img src={srinath} alt="G. Srinath" />
              <div>
                <p><strong>Contact:</strong> G. Srinath</p>
                <p><strong>Phone:</strong> <a href="tel:9133709740">9133709740</a></p>
              </div>
            </div>
          </section>

          <section id="delivery" className="section contact-card">
            <h2>Home Delivery & Repairs</h2>
            <p>We offer fast home delivery and doorstep repair services.</p>
            <div className="contact-details">
              <img src={gopi} alt="G. Gopi" />
              <div>
                <p><strong>Contact:</strong> G. Gopi</p>
                <p><strong>Phone:</strong> <a href="tel:7396179896">7396179896</a></p>
              </div>
            </div>
          </section>

          <section id="contact" className="section contact-card">
            <h2>Contact Us</h2>
            <div className="contact-details">
              <img src={srinivasaRao} alt="G. Srinivasa Rao" />
              <div>
                <p><strong>Owner:</strong> G. Srinivasa Rao</p>
                <p><strong>Phone:</strong> <a href="tel:8341751105">8341751105</a></p>
                <p><strong>Location:</strong> Macherla</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sri Maruthi Electronics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
