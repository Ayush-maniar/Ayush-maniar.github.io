import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  // Replace with your actual links
  const linkedinUrl = "https://www.linkedin.com/in/ayush-maniar/"; // Replace with your LinkedIn URL
  const githubUrl = "https://github.com/Ayush-maniar"; // Replace with your GitHub URL
  const email = "ayushmaniar70@gmail.com";

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <p>Feel free to reach out via email or connect with me on social media.</p>
        <div className="contact-links">
           <a href={`mailto:${email}`} aria-label="Email">
             {FaEnvelope({}) as React.ReactElement} <span>{email}</span>
           </a>
           <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
             {FaLinkedin({}) as React.ReactElement} <span>LinkedIn</span>
           </a>
           <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
             {FaGithub({}) as React.ReactElement} <span>GitHub</span>
           </a>
           {/* Uncomment or remove Twitter link as needed */}
           {/*
           <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
             <FaTwitter /> <span>Twitter</span>
           </a>
           */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
