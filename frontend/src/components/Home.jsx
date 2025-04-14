import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center text-white">
      <div className="max-w-3xl px-4">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">Hi there! 👋</h2>
        <h1 className="text-6xl font-bold mb-6">I'm Vanjivaka Sairam</h1>
        <div className="text-2xl font-semibold mb-6 text-gray-300">
          Full Stack Developer & AI/ML Enthusiast
        </div>
        <p className="text-lg leading-relaxed mb-8 text-gray-400 max-w-2xl mx-auto">
          Pre-final year undergraduate at Indian Institute of Technology, Ropar. 
          Passionate about building innovative web solutions and exploring the frontiers 
          of artificial intelligence and machine learning.
        </p>
        <div className="flex justify-center gap-4">
        <a 
  href={`${process.env.PUBLIC_URL}/assets/Sairam_Vanjivaka_CV.pdf`}
  download="Sairam_Vanjivaka_CV.pdf"
  className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 font-semibold"
>
  Download CV
</a>
        </div>
      </div>
    </div>
  );
};

export default Home; 