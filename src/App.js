import React from 'react';
import srinath from './assets/Srinath.jpg';
import gopi from './assets/Gopi.jpg';
import srinivasaRao from './assets/DAD.jpg';

import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Sri Maruthi Electronics Shop</h1>
        <p>Near Navaranga Bakery, Macherla, Palnadu District</p>
      </header>

      <div className="container">
        <nav className="sidebar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#remotes">Remotes</a>
          <a href="#spare">Spare Parts</a>
          <a href="#delivery">Home Delivery</a>
          <a href="#contact">Contact</a>
        </nav>

        <main>
          <section id="home">
            <h2>Welcome</h2>
            <p>
              Welcome to <strong>Sri Maruthi Electronics Shop</strong>, your trusted destination for all your
              electronic and remote control needs in <strong>Macherla</strong>. We are committed to quality
              service and customer satisfaction.
            </p>
          </section>

          <section id="about">
            <h2>About the Shop</h2>
            <p>
              <strong>Sri Maruthi Electronics Shop</strong> is a well-established electronics outlet serving
              the Macherla community for several years. We specialize in electronic gadgets, remote controls,
              and customized electronic solutions.
            </p>
            <ul>
              <li>Experienced in electronic repair and remote programming</li>
              <li>Wide range of high-quality remotes and electronics</li>
              <li>Reliable home delivery service</li>
              <li>Affordable prices and trustworthy service</li>
            </ul>
          </section>

          <section id="services">
            <h2>Our Services</h2>
            <ul>
              <li>Electronic device repairs</li>
              <li>Remote control programming</li>
              <li>Customized electronics solutions</li>
              <li>Troubleshooting and diagnostics</li>
            </ul>
          </section>

          <section id="remotes">
            <h2>Remotes</h2>
            <p>We stock a wide range of remote controls:</p>
            <ul>
              <li>TV Remotes</li>
              <li>AC Remotes</li>
              <li>Set-top Box Remotes</li>
              <li>Car Remotes</li>
              <li>Universal Remotes</li>
            </ul>
          </section>

          <section id="spare">
            <h2>Spare Parts</h2>
            <p>We provide genuine spare parts for various electronics and appliances. Visit us for reliable replacement components and professional support.</p>
            <p><strong>Contact Person:</strong> G. Srinath</p>
            <p><strong>Phone:</strong> <a href="tel:9133709740">9133709740</a></p>
            <img src={srinath} alt="G. Srinath" className="contact-photo" />
          </section>

          <section id="delivery">
            <h2>Home Delivery & Repairs</h2>
            <p>Enjoy safe and fast <strong>Home Delivery</strong> for all our products. We also offer doorstep repair services.</p>
            <p><strong>Contact Person:</strong> G. Gopi</p>
            <p><strong>Phone:</strong> <a href="tel:7396179896">7396179896</a></p>
            <img src={gopi} alt="G. Gopi" className="contact-photo" />
          </section>

          <section id="contact">
            <h2>Contact Us</h2>
            <p><strong>Location:</strong> Macherla</p>
            <p><strong>Owner:</strong> G. Srinivasa Rao</p>
            <p><strong>Phone:</strong> <a href="tel:8341751105">8341751105</a></p>
            <img src={srinivasaRao} alt="G. Srinivasa Rao" className="contact-photo" />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
