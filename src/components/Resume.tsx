import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <div className="resume-content">
        <div className="resume-pdf-embed">
          <iframe
            src="/Ayush_Maniar_Resume.pdf"
            title="Ayush Maniar Resume"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
          />
        </div>
        <p>You can view or download my full resume below.</p>
        <a
          href="./Ayush_Maniar_Resume.pdf" // Relative path to the PDF in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume (PDF)
        </a>
        {/* Optionally, add key highlights here */}
        {/*
         <h3>Highlights</h3>
         <ul>
            <li>MSCS @ UC San Diego (GPA: 4.0/4.0)</li>
            <li>Ex-Data Scientist III @ Walmart Global Tech (SAMS Club)</li>
            <li>B.Tech Electrical Engineering @ IIT Madras</li>
            <li>Patented Innovation in Transit Time Prediction ($56M Conversion Boost)</li>
            <li>Delivery Delay Prediction (NPS +20 points, WISMO Calls -46%)</li>
            <li>Order Sourcing Optimization ($21M Transport Cost Reduction)</li>
            <li>Safety Stock Optimization ($40M Online Sales Boost)</li>
            <li>Founder @ Eye In The Sky (Disaster Management Startup, INR 19.5 Lakhs Funding)</li>
            <li>Research: Multi-Agent LLM Coordination in Minecraft</li>
            <li>Skills: AI Agents, Deep Learning, Python, PyTorch, LangChain, SQL, etc.</li>
            <li>Awards: Walmart Excellence Award ($120M Impact), Microsoft 'AI For Earth' Grant</li>
         </ul>
        */}
      </div>
    </section>
  );
};

export default Resume;
