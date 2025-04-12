import React from 'react'

const Contact = () => {
  return (
    <div className="p-8 bg-gray-800 text-white shadow-md rounded-lg w-full mt-10">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-300 mb-4">Feel free to reach out to me through any of the platforms below:</p>
      <div className="flex justify-center space-x-4">
        <a 
          href="mailto:sairamvanjivaka@gmail.com" 
          className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-full hover:bg-blue-600 hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Email
        </a>
        <a 
          href="https://www.linkedin.com/in/sairam-vanjivaka/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-full hover:bg-blue-600 hover:shadow-lg transition-transform transform hover:scale-105"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/Vanjivaka-Sairam" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-full hover:bg-blue-600 hover:shadow-lg transition-transform transform hover:scale-105"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Contact