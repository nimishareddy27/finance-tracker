import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FileText, LogOut } from 'lucide-react';

const Home: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/exit');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Finance Tracker</h1>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome, {user?.name}!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-medium text-gray-700">Department</h3>
                <p className="text-gray-600">{user?.department}</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-medium text-gray-700">Year</h3>
                <p className="text-gray-600">{user?.year}</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-medium text-gray-700">Section</h3>
                <p className="text-gray-600">{user?.section}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Resume</h2>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="font-medium">Resume.pdf</p>
                <a 
                  href="https://example.com/sample-resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Finance Tracker</h2>
            <p className="text-gray-600 mb-4">
              Our finance tracker helps you manage your personal finances efficiently. Track your income, expenses, 
              and savings goals all in one place. Stay on top of your financial health with intuitive visualizations 
              and reports.
            </p>
            <p className="text-gray-600">
              This application is designed to simplify your financial management and help you make informed decisions 
              about your money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;