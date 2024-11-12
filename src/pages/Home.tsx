import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-1 justify-center items-center p-8 text-center'>
      <div className='max-w-2xl'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Welcome to My Component Library
        </h1>
        <p className='text-lg text-gray-600 mb-6'>
          This is a personal project that I’ve built to provide a collection of reusable, customizable, and accessible UI components designed with React and Tailwind CSS. The goal is to help developers like myself quickly integrate clean and responsive components into web and mobile applications.
        </p>
        <p className='text-lg text-gray-600'>
          From buttons and inputs to modals and navigation elements, everything is designed to be flexible and easy to use, so you can focus more on building your app and less on UI components.
        </p>
        <div className='mt-4 flex flex-row gap-4 items-center justify-center'>
          <Link
            to="/components"
            className="inline-block px-6 py-2 text-sm font-semibold text-white bg-brand-600 rounded-md hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors duration-200"
          >Components</Link>
          <Link
            to="/landing-pages"
            className="inline-block px-6 py-2 text-sm font-semibold text-white bg-brand-600 rounded-md hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors duration-200"
          >Landing Pages</Link>
        </div>
      </div>
    </div>
  )
}

export default Home