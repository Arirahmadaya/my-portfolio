import { Progress } from "@nextui-org/react";
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiAdobe } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 40, icon: <FaJs className="text-yellow-400" /> },
    { name: "React", level: 45, icon: <FaReact className="text-blue-500" /> },
    { name: "Tailwind CSS", level: 65, icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Node.js", level: 35, icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", level: 40, icon: <SiExpress className="text-gray-600" /> },
    { name: "SQL", level: 55, icon: <FaDatabase className="text-blue-700" /> },
    { name: "UI/UX Design", level: 50, icon: <SiAdobe className="text-red-600" /> },
    { name: "Git", level: 45, icon: <FaGitAlt className="text-orange-500" /> },
  ];

  return (
    <section id="skills" className="px-6 py-24 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-start">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{skill.icon}</span>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <Progress 
                value={skill.level} 
                color="gradient" 
                size="lg" 
                shadow 
                aria-label={skill.name}
              />
              <p className="text-right text-sm mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
