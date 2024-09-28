import React from "react";
import InfiniteMovingCards from "../components/InfiniteMovingCards";
import experiences from "../store/experiences";
export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-100 h-screen">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Experience</h2>
      </div>
      <InfiniteMovingCards experiences={experiences} />
    </section>
  );
}
