import React from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <nav className="border-solid border-b-2 border-custom-black bg-gray-100 fixed top-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-30">
        <ul className="flex justify-end space-x-4 py-4 px-8 text-black">
          <li>
            <a href="#about" className="hover:text-purple-400">About</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-purple-400">Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </li>
        </ul>
      </nav>
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="bg-gray-100 py-4">
        <nav className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p className="text-center text-gray-600 mt-4">&copy; 2023 Veronika Litvinovich. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
