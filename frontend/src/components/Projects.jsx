import React from 'react'

const Project = ({ title, description, github }) => {
  return (
    <div className="mb-4 p-4 bg-gray-700 rounded-lg">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-300 mb-2">{description}</p>
      <a href={github} className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">GitHub</a>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="p-8 bg-gray-800 text-white shadow-md rounded-lg w-full mt-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      {/* E-commerce Website Project */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-2">
          <a 
            href="https://github.com/Vanjivaka-Sairam/E---Commerce-website-using-MERN-stack" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          >
            E-commerce Website with Admin Dashboard using MERN Stack
          </a>
          <span className="text-sm text-gray-400">Full-Stack Web Application</span>
        </div>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Developed a full-featured e-commerce web application leveraging the MERN stack (MongoDB, Express.js, React.js, and Node.js).</li>
        </ul>
      </div>

      {/* Simple Product Store */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-2">
          <a 
            href="https://github.com/Vanjivaka-Sairam/Simple-Product-Store" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          >
            Simple Product Store
          </a>
          <span className="text-sm text-gray-400">Full-Stack Web Application</span>
        </div>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Developed a modern, full-stack product store application using the PERN stack (PostgreSQL, Express.js, React.js, Node.js).</li>
        </ul>
      </div>

      {/* Digital Image Encryption */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-2">
          <a 
            href="https://github.com/Aryavardhan21/image_encryption" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          >
            Digital Image Encryption using AES and RSA Cryptographic Algorithms
          </a>
          <span className="text-sm text-gray-400">Group Project</span>
        </div>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Designed and implemented a secure image encryption system by integrating symmetric (AES) and asymmetric (RSA) cryptographic algorithms to ensure both speed and security.</li>
        </ul>
      </div>

      {/* Path Finding Project */}
      <div className="mb-8">
        <div className="flex justify-between items-start mb-2">
          <a 
            href="https://github.com/Gabbumaay/Optimal_Path_finding_by_A-star_Algorithm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
          >
            Effective Path Finding using A* Algorithm
          </a>
          <span className="text-sm text-gray-400">Data Structures (CS201)</span>
        </div>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Designed and implemented an A* (A-star) algorithm in C to determine the most efficient and least-hop paths between cities in a road network modeled as a matrix.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects