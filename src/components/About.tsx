import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = ["AI Agents", "Deep Learning", "Python", "Pytorch", "Huggingface", "LangChain", "smolAgents", "SQL", "Databricks", "JavaScript", "TensorFlow", "Git", "Linux", "PySpark", "StreamLit"];

  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-horizontal">
        <div className="about-photo">
          <img src="/Ayush_Maniar_UCSD_ID_PIC.png" alt="Ayush Maniar" />
        </div>
        <div className="about-content">
          <p>
            Hi, I'm Ayush Maniar. Currently, I'm pursuing a Master of Science in Computer Science (MSCS) at UC San Diego.
          </p>
          <p>
            Before joining UCSD, I worked as a Data Scientist III at Walmart Global Tech India (SAMS Club), where I focused on leveraging data science and machine learning to solve complex business problems, particularly in logistics and inventory optimization. I have experience in time series forecasting, optimization using MILP, and building predictive models.
          </p>
          <p>
            I also co-founded 'Eye In The Sky', a Deep Learning & Computer Vision startup focused on disaster management using drones during my undergraduate studies at IIT Madras.
          </p>
        </div>
      </div>
      <div className="about-skills-full">
        <h3>Key Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
