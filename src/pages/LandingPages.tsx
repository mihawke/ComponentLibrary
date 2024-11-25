// LandingPageShowcase.jsx
import { useEffect, useState } from 'react';
import Template1 from '../templates/Template1/Template1';
import Template2 from '../templates/Template2/Template2';
import Template3 from '../templates/Template3/Template3';
import Template4 from '../templates/Template4/Template4';
import Template5 from '../templates/Template5/Template5';
import Template6 from '../templates/Template6/Template6';
import Template7 from '../templates/Template7/Template7';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import IconButton from '../components/FAB';


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
      case 3:
        return <Template3 />;
      case 4:
        return <Template4 />;
      case 5:
        return <Template5 />;
      case 6:
        return <Template6 />;
      case 7:
        return <Template7 />;
      default:
        return <Template1 />;
    }
  };

  useEffect(() => {
    if (page == 1) {
      setIsDisabled({ ...isDisabled, left: true, right: false })
    }
    else if (page == 7) {
      setIsDisabled({ ...isDisabled, left: false, right: true })
    }
    else {
      setIsDisabled({ ...isDisabled, left: false, right: false })
    }
    window.scrollTo(0, 0);
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
            <span> 7</span>
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
