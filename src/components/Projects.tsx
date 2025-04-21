import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {/* Project 1: Multi-agent Collaboration */}
        <div className="project-card">
          <h3>Multi-Agent LLM Collaboration in Minecraft</h3>
          <p>
            Research project focusing on developing and evaluating a framework for multi-agent collaboration using Large Language Models (LLMs) within the Minecraft environment. Explored collaborative reasoning aspects like resource sharing, skill sets, expertise, and information exchange.
          </p>
          <p><strong>Paper:</strong> Collaborating Action by Action: A Multi-agent LLM Framework for Embodied Reasoning</p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jFIWlEv6ZXo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', margin: '18px 0' }}>
            <a href="https://github.com/kolbytn/mindcraft" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" style={{ color: '#fff', fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              {/* GitHub SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{verticalAlign: 'middle'}}><path d="M12 0C5.371 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
              <span style={{ fontSize: '1rem' }}>GitHub Repo</span>
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" aria-label="Research Paper" style={{ color: '#fff', fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              {/* File SVG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{verticalAlign: 'middle'}}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              <span style={{ fontSize: '1rem' }}>Research Paper</span>
            </a>
          </div>
        </div>

        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
