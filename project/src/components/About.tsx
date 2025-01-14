import React from 'react';
import { Heart, Coffee, Code, BookOpen, Users, Globe } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 opacity-0 animate-scaleIn">
          About Me
        </h1>
        <p className="text-lg text-gray-600 opacity-0 animate-fadeInUp animate-delay-100">
          Passionate B.Tech student with a love for technology and innovation
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-12 opacity-0 animate-fadeInUp animate-delay-200">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <Heart className="w-6 h-6 text-red-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">Who I Am</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            I'm a third-year B.Tech student with a passion for creating innovative solutions through technology. 
            My journey in engineering has been driven by curiosity and a desire to make a positive impact in the world of technology.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When I'm not coding or studying, you'll find me exploring new technologies, contributing to open-source projects, 
            or collaborating with fellow developers to bring creative ideas to life.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className="mb-12 opacity-0 animate-fadeInUp animate-delay-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition-transform">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Development</h3>
            </div>
            <p className="text-gray-700">
              Focused on full-stack development with expertise in modern web technologies and frameworks.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition-transform">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Learning</h3>
            </div>
            <p className="text-gray-700">
              Continuously expanding my knowledge in emerging technologies and software development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="mb-12 opacity-0 animate-fadeInUp animate-delay-400">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <Coffee className="w-6 h-6 text-yellow-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">My Interests</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Web Development</li>
                <li>• Mobile App Development</li>
                <li>• Artificial Intelligence</li>
                <li>• Cloud Computing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Open Source Contributing</li>
                <li>• Tech Blogging</li>
                <li>• Problem Solving</li>
                <li>• Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animate-fadeInUp animate-delay-500">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-purple-500 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Community</h3>
          </div>
          <p className="text-gray-700">
            Actively participating in tech communities and helping fellow students grow in their technical journey.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Globe className="w-6 h-6 text-indigo-500 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Future Goals</h3>
          </div>
          <p className="text-gray-700">
            Aspiring to become a skilled software engineer and contribute to innovative projects that make a difference.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;