import React from 'react';
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
             {/* Email SVG icon */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{verticalAlign: 'middle'}}><path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.01-8-5.01V6h16zM4 20v-9.489l7.445 4.653a1 1 0 0 0 1.11 0L20 10.511V20H4z"/></svg>
             <span>{email}</span>
           </a>
           <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
             {/* LinkedIn SVG icon */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{verticalAlign: 'middle'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
             <span>LinkedIn</span>
           </a>
           <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
             {/* GitHub SVG icon */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{verticalAlign: 'middle'}}><path d="M12 0C5.371 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
             <span>GitHub</span>
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
