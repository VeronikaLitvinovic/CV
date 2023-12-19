import React from "react";

export default function Profile() {
  return (
    <div id="profile" className="bg-gray-100 py-40 flex items-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-600 text-center">Hello, I'm</p>
        <h1 className="text-4xl font-bold text-center mb-4">Veronika Litvinovich</h1>
        <p className="text-gray-600 text-center">Frontend Developer</p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-purple-400 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded mr-2"
            onClick={() => window.open("./Veronika_Litvinovich_CV.pdf")}
          >
            Download CV
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <a href="https://www.linkedin.com/in/veronika-litvinovich-1292642a6/" target="_blank">
            <img
              src="./images/linkedin.png"
              alt="My LinkedIn profile"
              className="w-8 h-8 mr-2 cursor-pointer"
            />
          </a>
          <a href="https://github.com/dashboard/" target="_blank">
            <img
              src="./images/github.png"
              alt="My Github profile"
              className="w-8 h-8 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}