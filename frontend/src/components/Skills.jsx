import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="p-8 bg-gray-800 text-white shadow-md rounded-lg w-full mt-10">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      
      {/* Programming Languages */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-blue-400">Programming Languages</h2>
        <div className="flex flex-wrap gap-3">
          {['C', 'C++', 'JavaScript', 'Python', 'MATLAB'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Web Development */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-blue-400">Web Development</h2>
        <div className="flex flex-wrap gap-3">
          {['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-blue-400">Databases</h2>
        <div className="flex flex-wrap gap-3">
          {['MongoDB', 'PostgreSQL'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Deployment and DevOps */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-blue-400">Deployment and DevOps</h2>
        <div className="flex flex-wrap gap-3">
          {['AWS', 'Vercel', 'Netlify', 'Railway', 'Docker'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Software Tools and Libraries */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-blue-400">Software Tools and Libraries</h2>
        <div className="flex flex-wrap gap-3">
          {[
            'Git/Github',
            'Postman',
            'Numpy',
            'Pandas',
            'Matplotlib',
            'Jupyter Notebook',
            'Google Collab'
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills