import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Components from './pages/Components.tsx';
import Home from './pages/Home.tsx';
import LandingPages from './pages/LandingPages.tsx';
import { FaBars } from 'react-icons/fa';
import IconButton from './components/FAB.tsx';

function App() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <BrowserRouter>
      <div className="flex flex-col w-full h-full relative">
        <div className='fixed top-4 left-4 flex flex-row items-center z-50'>
          <IconButton size='lg' hierarchy="primary" onClick={()=>setShowMenu(prev => !prev)}>
            <FaBars/>
            </IconButton>
          <nav className={`flex flex-row items-center bg-white ${showMenu? '':'hidden'} shadow-xl rounded-md`}>
            <Link
              to="/"
              onClick={()=>setShowMenu(false)}
              className="ml-4 px-4 py-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors duration-200 border-b-2 border-transparent hover:border-brand-600 focus:outline-none focus:text-brand-700"
            >Home</Link>
            <Link
              to="/components"
              onClick={()=>setShowMenu(false)}
              className="px-4 py-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors duration-200 border-b-2 border-transparent hover:border-brand-600 focus:outline-none focus:text-brand-700"
            >Components</Link>
            <Link
              to="/landing-pages"
              onClick={()=>setShowMenu(false)}
              className="px-4 py-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors duration-200 border-b-2 border-transparent hover:border-brand-600 focus:outline-none focus:text-brand-700"
            >Landing Pages</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/landing-pages" element={<LandingPages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
