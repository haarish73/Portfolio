import React from 'react';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 opacity-0 animate-scaleIn text-center">
        Resume
      </h1>

      {/* Education Section */}
      <section className="mb-12 opacity-0 animate-fadeInUp animate-delay-100">
        <div className="flex items-center mb-4">
          <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition-transform">
          <h3 className="text-xl font-semibold text-gray-800">Bachelor of Technology</h3>
          <p className="text-gray-600">Your University Name</p>
          <p className="text-gray-500">2021 - Present</p>
          <p className="text-gray-700 mt-2">
            Currently pursuing B.Tech with a focus on Computer Science and Engineering.
            Maintaining a strong academic record with a CGPA of X.XX
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12 opacity-0 animate-fadeInUp animate-delay-200">
        <div className="flex items-center mb-4">
          <Code className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Technical Skills</h2>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">Programming Languages</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>JavaScript/TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">Technologies</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12 opacity-0 animate-fadeInUp animate-delay-300">
        <div className="flex items-center mb-4">
          <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold text-gray-800">Portfolio Website</h3>
            <p className="text-gray-600 mb-2">React, TypeScript, Tailwind CSS</p>
            <p className="text-gray-700">
              A personal portfolio website showcasing my projects and skills,
              built with modern web technologies and responsive design principles.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold text-gray-800">Project Name 2</h3>
            <p className="text-gray-600 mb-2">Technologies Used</p>
            <p className="text-gray-700">
              Brief description of your second project and its key features.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="opacity-0 animate-fadeInUp animate-delay-400">
        <div className="flex items-center mb-4">
          <Award className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Achievements</h2>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
              <span>Achievement 1 - Brief description of the achievement and its significance</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
              <span>Achievement 2 - Brief description of the achievement and its significance</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Resume;