import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-8 text-center">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
