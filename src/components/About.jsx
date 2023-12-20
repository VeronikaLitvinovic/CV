import React from "react";

export default function About() {
  return (
    <div id="about" className="bg-gray-100 py-8">
      <p className="text-gray-600 text-center">Get To Know More</p>
      <h1 className="text-4xl text-center font-bold mb-8">About Me</h1>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center  mx-auto">
            <div className="flex flex-col md:flex-row justify-center mx-auto ">
              <div className="flex items-center mb-8 mr-10 md:mb-0">
                <img
                  src="./images/experience.png"
                  alt="Experience icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold">Experience</h3>
                  <p>2+ years Frontend Development</p>
                </div>
              </div>
              <div className=" flex mb-8 mr-10 items-center">
                <img
                  src="./images/education.png"
                  alt="Education icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold">Education</h3>
                  <h3 className="font-semibold">Belarusian State University</h3>
                  <p>Web programming and Internet technologies</p>
                  <p className="font-light">2022 - 2026</p>
                </div>
              </div>
              <div className=" flex items-center">
                <img
                  src="./images/languages.png"
                  alt="Languages icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold">Languages</h3>
                  <p>English (B2)</p>
                  <p>Russian (Native)</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
