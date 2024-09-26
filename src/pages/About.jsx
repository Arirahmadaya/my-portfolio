import ukm from "../assets/ukm.jpg";
import Contact from "../components/Contact";
const About = () => {
  return (
    <>
    <section id="about" className="px-12 py-24 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <p className="text-xl leading-relaxed">
              I am a passionate Web Developer and UI/UX Designer with a strong foundation in JavaScript, React, and Tailwind CSS. Currently, I’m expanding my expertise in modern web development tools and methodologies.
            </p>
            <p className="text-xl leading-relaxed mt-6">
              My experience includes both frontend and backend development, focusing on delivering clean, maintainable code and exceptional user experiences.
            </p>
          </div>
          <div className="animate-fadeInRight">
            <img src={ukm} alt="Ari Rahmadaya" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
    <Contact />

    </>
  );
};

export default About;
