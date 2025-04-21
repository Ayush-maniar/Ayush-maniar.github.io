import React from 'react';
import './Projects.css';
import { FaGithub, FaFileAlt } from 'react-icons/fa';

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
              <FaGithub /> <span style={{ fontSize: '1rem' }}>GitHub Repo</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Research Paper" style={{ color: '#fff', fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <FaFileAlt /> <span style={{ fontSize: '1rem' }}>Research Paper</span>
            </a>
          </div>
        </div>

        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
