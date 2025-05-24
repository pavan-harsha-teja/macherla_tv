import React from 'react';
import './App.css';

const sections = [
  {
    id: 'home',
    title: 'Welcome',
    content: (
      <p>
        Welcome to <strong>Sri Maruthi Electronics Shop</strong>, your trusted destination for all your
        electronic and remote control needs in <strong>Maacherla</strong>. We are committed to quality
        service and customer satisfaction.
      </p>
    ),
  },
  {
    id: 'about',
    title: 'About the Shop',
    content: (
      <>
        <p>
          <strong>Sri Maruthi Electronics Shop</strong> is a well-established electronics outlet serving
          the Maacherla community for several years. We specialize in electronic gadgets, remote controls,
          and customized electronic solutions.
        </p>
        <ul>
          <li>Experienced in electronic repair and remote programming</li>
          <li>Wide range of high-quality remotes and electronics</li>
          <li>Reliable home delivery service</li>
          <li>Affordable prices and trustworthy service</li>
        </ul>
      </>
    ),
  },
  {
    id: 'services',
    title: 'Our Services',
    content: (
      <ul>
        <li>Electronic device repairs</li>
        <li>Remote control programming</li>
        <li>Customized electronics solutions</li>
        <li>Troubleshooting and diagnostics</li>
      </ul>
    ),
  },
  {
    id: 'remotes',
    title: 'Remotes',
    content: (
      <>
        <p>We stock a wide range of remote controls:</p>
        <ul>
          <li>TV Remotes</li>
          <li>AC Remotes</li>
          <li>Set-top Box Remotes</li>
          <li>Car Remotes</li>
          <li>Universal Remotes</li>
        </ul>
      </>
    ),
  },
  {
    id: 'spare',
    title: 'Spare Parts',
    content: (
      <>
        <p>
          We provide genuine spare parts for various electronics and appliances. Visit us for reliable
          replacement components and professional support.
        </p>
        <p><strong>Contact Person:</strong> G. Srinath</p>
        <p><strong>Phone:</strong> <a href="tel:9133709740">9133709740</a></p>
        <img src="/images/srinath.jpg" alt="G. Srinath" className="contact-photo" />
      </>
    ),
  },
  {
    id: 'delivery',
    title: 'Home Delivery & Repairs',
    content: (
      <>
        <p>
          Enjoy safe and fast <strong>Home Delivery</strong> for all our products. We also offer doorstep
          repair services.
        </p>
        <p><strong>Contact Person:</strong> G. Gopi</p>
        <p><strong>Phone:</strong> <a href="tel:7396179896">7396179896</a></p>
        <img src="/images/gopi.jpg" alt="G. Gopi" className="contact-photo" />
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: (
      <>
        <p><strong>Location:</strong> Maacherla</p>
        <p><strong>Owner:</strong> G. Srinivasa Rao</p>
        <p><strong>Phone:</strong> <a href="tel:8341751105">8341751105</a></p>
        <img src="/images/srinivasa.jpg" alt="G. Srinivasa Rao" className="contact-photo" />
      </>
    ),
  },
];

const App = () => {
  return (
    <div>
      <header className="header">
        <h1>Sri Maruthi Electronics Shop</h1>
        <p>Near Navaranga Bakery, Maacherla, Palnadu District</p>
      </header>

      <div className="container">
        <nav className="sidebar">
          {sections.map(section => (
            <a key={section.id} href={`#${section.id}`}>{section.title}</a>
          ))}
        </nav>

        <main>
          {sections.map(section => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;
