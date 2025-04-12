const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div id="about" className="text-center mt-20">
        <h2 className="text-4xl font-bold mb-2">Hello, It's Me</h2>
        <h3 className="text-6xl font-bold mb-4">[Your Name]</h3>
        <h4 className="text-2xl text-blue-400 mb-4">And I'm a Frontend Developer</h4>
        <p className="text-lg max-w-md mx-auto mb-6">I am a passionate developer with a love for creating beautiful and functional web applications. My journey in tech 
          started with a curiosity for how things work and has grown into a fulfilling career.</p>
        <a href="../assets/Sairam_Vanjivaka_CV.pdf" download className="mt-6 px-10 py-4 bg-blue-500 text-white text-lg font-semibold rounded-full hover:bg-blue-600 hover:shadow-lg transition-transform transform hover:scale-105">Download CV</a>
      </div>
    </div>
  );
};

export default Home; 