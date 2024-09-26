import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold text-white mb-4 animate-fadeInDown">Ari Rahmadaya</h1>
        <p className="text-2xl text-gray-300 animate-fadeInUp">Web Developer & UI/UX Enthusiast</p>
        <Link to="/about" className="animate-bounce">
          <button className="mt-6 bg-white text-black py-2 px-4 rounded-lg">Discover More </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
