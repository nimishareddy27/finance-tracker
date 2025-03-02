import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp } from 'lucide-react';

const Exit: React.FC = () => {
  useEffect(() => {
    // Clear any session data if needed
    // This is already handled by the logout function in AuthContext
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <ThumbsUp className="h-16 w-16 text-blue-500 mx-auto" />
        
        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
          Thanks for visiting my website!
        </h2>
        
        <p className="mt-4 text-center text-lg text-gray-600">
          We hope you enjoyed your experience with our Finance Tracker.
        </p>
        
        <div className="mt-6">
          <Link
            to="/login"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exit;