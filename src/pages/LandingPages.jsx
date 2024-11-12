// LandingPageShowcase.jsx
import React, { useEffect, useState } from 'react';
import Template1 from '../templates/Template1/Template1';
import Template2 from '../templates/Template2/Template2';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import IconButton from '../components/IconButton';


function LandingPages() {
  const [page, setPage] = useState(1)
  const [isDisabled, setIsDisabled] = useState({
    left: false,
    right: false
  })

  const renderLandingPage = () => {
    switch (page) {
      case 1:
        return <Template1 />;
      case 2:
        return <Template2 />;
      default:
        return <Template1 />;
    }
  };

  useEffect(() => {
    if (page == 1) {
      setIsDisabled({ ...isDisabled, left: true, right: false })
    }
    else if (page == 2) {
      setIsDisabled({ ...isDisabled, left: false, right: true })
    }
  }, [page])


  return (
    <div className="landing-page-showcase">
      {renderLandingPage()}
      <div className='fixed bottom-10 left-[50%] translate-x-[-50%] flex flex-row items-center text-white z-50'>
        <IconButton size='lg' hierarchy="primary" onClick={() => setPage(prev => prev - 1)} className='rounded-tr-none rounded-br-none' disabled={isDisabled.left}>
          <FaAngleLeft />
        </IconButton>
        <div className='flex flex-1 h-full bg-brand-600 p-2'>
          <p>
            <span>{page} </span>
            of
            <span> 2</span>
          </p>
        </div>
        <IconButton size='lg' hierarchy="primary" onClick={() => setPage(prev => prev + 1)} className='rounded-tl-none rounded-bl-none' disabled={isDisabled.right}>
          <FaAngleRight />
        </IconButton>
      </div>
    </div>
  );
}

export default LandingPages;
