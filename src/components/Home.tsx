import React from 'react';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div id="home">
      <section className="hero-section">
        <h1>Hi, this is Ayush Maniar</h1>
        <p>MS CSE Student @ UCSD | Ex-Data Scientist - III @ Walmart</p>
        {/* Add more introductory elements if desired */}
      </section>
      <About />
      <Projects />
      <Resume />
    </div>
  );
};

export default Home;
