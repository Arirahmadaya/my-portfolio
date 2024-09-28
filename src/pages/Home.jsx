import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gray-50 "></div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold  mb-4 animate-fadeInDown">Ari Rahmadaya</h1>
        <p className="text-2xl text-gray-500 animate-fadeInUp">Web Developer & UI/UX Enthusiast</p>
        <Link to="/about" className="animate-bounce">
          <button className="mt-6 bg-gray-600 text-white py-2 px-4 rounded-lg">Discover More </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
