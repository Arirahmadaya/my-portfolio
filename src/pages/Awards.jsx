import { Card } from "@nextui-org/react";

const Awards = () => {
  const awards = [
    {
      title: "Best Sosial Impact Website",
      description: "Best Sosial Impact Website at Campuss Event 2024",
    },
    {
      title: "UI/UX Design Challenge",
      description: "Participant of the competition for UI/UX design focusing on accessibility and modern web interfaces.",
    },
  ];

  return (
    <section id="awards" className="px-12 py-24 bg-gray-900 h-screen">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center text-white mb-12">Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {awards.map((award, index) => (
            <Card
              key={index}
              isHoverable
              className="shadow-lg transition-transform transform hover:-translate-y-2 p-6 bg-white rounded-lg animate-fadeInUp"
            >
              <h3 className="text-2xl font-semibold mb-2">{award.title}</h3>
              <p>{award.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
