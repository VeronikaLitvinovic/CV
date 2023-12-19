import React from "react";
import data from "./../data.json";

export default function Projects() {
  const projects = data.projects;

  return (
    <div id="projects" className="bg-gray-100 py-8">
      <p className="text-gray-600 text-center">Browse My Recent</p>
      <h1 className="text-4xl text-center font-bold mb-8">Projects</h1>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
              key={index}
              style={{ flexWrap: "wrap" }}
            >
              <div className="mb-4">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-sm font-light mb-2">{project.description}</p>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => (window.location.href = project.githubUrl)}
                >
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}