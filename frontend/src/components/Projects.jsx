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
    <div className="p-8 bg-gray-800 text-white shadow-md rounded-lg w-full mt-10">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <Project 
        title="Project 1"
        description="A web application that does amazing things."
        github="https://github.com/yourusername/project1"
      />
      <Project 
        title="Project 2"
        description="Another great project with cool features."
        github="https://github.com/yourusername/project2"
      />
      <Project 
        title="Project 3"
        description="A project that showcases my skills in web development."
        github="https://github.com/yourusername/project3"
      />
    </div>
  );
};

export default Projects