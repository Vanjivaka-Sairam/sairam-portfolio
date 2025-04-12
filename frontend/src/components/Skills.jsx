import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="p-8 bg-gray-800 text-white shadow-md rounded-lg w-full mt-10">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <ul className="list-disc pl-5 text-gray-300">
        <li className="mb-2">JavaScript & React</li>
        <li className="mb-2">HTML & CSS</li>
        <li className="mb-2">Data Analysis & Visualization</li>
        <li className="mb-2">DevOps & CI/CD</li>
        <li className="mb-2">Cloud Services & Deployment</li>
      </ul>
    </div>
  )
}

export default Skills