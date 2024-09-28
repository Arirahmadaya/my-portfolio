import jsLogo from '../assets/javascript.png';
import reactLogo from "../assets/react.png";
import expressLogo from "../assets/express.png";
import figmaLogo from "../assets/figma.png";
import tailwindLogo from "../assets/tailwindcss.png";
import bootsrapLogo from "../assets/bootstrap.png";
import mysqlLogo from "../assets/mysql.png";
import githubLogo from "../assets/github.png";


const Interest = () => {
  const technologies = [
    { name: "JavaScript", image: jsLogo },
    { name: "React", image: reactLogo },
    { name: "Figma", image: figmaLogo },
    { name: "Tailwind CSS", image: tailwindLogo },
    { name: "Express", image: expressLogo },
    
    { name: "Tailwind CSS", image: tailwindLogo },
    { name: "MySQL", image: mysqlLogo },
    
    { name: "Bootstrap", image: bootsrapLogo},
    { name: "Github", image: githubLogo },
    { name: "Figma", image: figmaLogo },
    
  ];

  return (
    <section id="interest" className="px-12 py-24 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Interest</h2>
        <p className="text-xl leading-relaxed text-center mb-8">
          I am deeply interested in frontend development, especially in modern technologies like React, and the creativity involved in UI/UX design. Below are the tools and technologies I frequently use:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center animate-fadeIn ">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative transition-transform transform hover:scale-105 ">
              <img
                src={tech.image}
                alt={`${tech.name} logo`}
                className="w-28 h-28 object-contain"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-sm font-semibold bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interest;
