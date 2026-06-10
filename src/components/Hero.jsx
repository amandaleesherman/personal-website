import heroImage from "../assets/backgrd.png";

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          Amanda Sherman
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300">
          Computer Science @UMass Amherst
        </p>

        <p className="max-w-2xl mt-6 text-lg text-gray-200">
          {/* Building software, machine learning systems, and full-stack web
          applications. */}
          Researching AI cybersecurity, building full-stack web applications, and Leetcoding prolifically
        </p>

        <a
          href="#projects"
          className="mt-10 px-8 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
        >
          View Projects
        </a>
      </div>
    </div>
  );
}

export default Hero;