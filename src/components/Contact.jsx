import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-100 py-8">
      <p className="text-gray-600 text-center">Get in Touch</p>
      <h1 className="text-4xl text-center font-bold mb-8">Contact Me</h1>
      <div className="max-w-md mx-auto">
        <div className="flex mb-4 text-black">
        <a href="mailto:examplemail@gmail.com" className=" flex items-center">
          <img
            src="./images/email.png"
            alt="Email icon"
            className="w-8 h-8 mr-4"
          />verlit5262@gmail.com</a>
        </div>
        <div className="flex items-center mb-4">
        <a href="https://t.me/velm9" className=" flex items-center">
          <img
            src="./images/telegram.jpg"
            alt="Telegram icon"
            className="w-8 h-8 mr-4"
          />@velm9</a>
        </div>
        <div className="flex items-center">
        <a href="https://www.linkedin.com/in/veronika-litvinovich-1292642a6/" className=" flex items-center">
          <img
            src="./images/linkedin.png"
            alt="LinkedIn icon"
            className="w-8 h-8 mr-4"
          />LinkedIn</a>
        </div>
      </div>
    </div>
  );
}