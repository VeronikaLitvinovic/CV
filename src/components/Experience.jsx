import React from "react";
import data from "./../data.json";

export default function Experience() {
  const skills = data.skills;

  return (
    <div id="experience" className="bg-gray-100 py-8">
      <p className="text-gray-600 text-center">Explore My</p>
      <h1 className="text-4xl text-center font-bold mb-8">Experience</h1>
      <div className="container mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
            {skills.map((skill, index) => (
              <article className="flex items-center p-4 bg-white rounded-lg shadow-md" key={index}>
                <img
                  src="./images/checkmark.png"
                  alt="Experience icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold">{skill.name}</h3>
                  <p className="font-light">{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}