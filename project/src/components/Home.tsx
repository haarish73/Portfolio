import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, FileText, User, Mail } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-20">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 opacity-0 animate-scaleIn">
          [Your Name]
        </h1>
        <div className="flex items-center justify-center space-x-2 mb-8 opacity-0 animate-fadeInUp animate-delay-100">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          <p className="text-xl text-gray-600">
            3rd Year B.Tech Student
          </p>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeInUp animate-delay-200">
          I am currently pursuing my Bachelor's in Technology, passionate about learning and exploring new technologies. I'm dedicated to developing innovative solutions and constantly expanding my knowledge in the field of engineering.
        </p>
      </div>

      {/* Section Previews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        {/* Resume Preview */}
        <Link to="/resume" className="group">
          <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition-all opacity-0 animate-fadeInUp animate-delay-300">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Resume</h2>
            </div>
            <p className="text-gray-600 mb-4">
              View my educational background, technical skills, and achievements.
            </p>
            <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
              Learn more →
            </span>
          </div>
        </Link>

        {/* About Preview */}
        <Link to="/about" className="group">
          <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition-all opacity-0 animate-fadeInUp animate-delay-400">
            <div className="flex items-center mb-4">
              <User className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">About</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Learn more about who I am, my interests, and what drives me.
            </p>
            <span className="text-green-600 group-hover:text-green-700 transition-colors">
              Learn more →
            </span>
          </div>
        </Link>

        {/* Contact Preview */}
        <Link to="/contact" className="group">
          <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-[1.02] transition-all opacity-0 animate-fadeInUp animate-delay-500">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Get in touch with me for collaborations or opportunities.
            </p>
            <span className="text-purple-600 group-hover:text-purple-700 transition-colors">
              Learn more →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;