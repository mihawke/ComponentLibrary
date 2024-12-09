import { FaFacebookF, FaInstagram, FaLongArrowAltDown, FaRegUserCircle, FaTwitter } from 'react-icons/fa'
import { IoMenu, IoSearch } from 'react-icons/io5'
import forestStay from './assets/bgImageOne.png'
import sunset from './assets/bgImageTwo.png'
import treeHouse from './assets/bgImageThree.png'
import forestTrack from './assets/bgImageFour.png'
import tracking from './assets/bgImageFive.png'
import { useState } from 'react'

const Template8 = () => {
    const [currentBg, setCurrentBg] = useState(forestStay)

    const lightGlass = {
        background: 'rgba(255, 255, 255, 0.25)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
    }
    const darkGlass = {
        background: 'rgba(0, 0, 0, 0.25)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
    }

    const handleClick = (param: string) => {
            switch (param) {
                case 'Forest Stay':
                    setCurrentBg(forestStay)
                    break;
                case 'Sunset':
                    setCurrentBg(sunset)
                    break;
                case 'Tree House':
                    setCurrentBg(treeHouse)
                    break;
                case 'Forest Track':
                    setCurrentBg(forestTrack)
                    break;
                case 'Tracking':
                    setCurrentBg(tracking)
                    break;
                default:
                    break;
            }
    }

    return (
        <div className="flex w-full h-screen bg-cover bg-center transition-all duration-300 ease-in-out"
            style={{ backgroundImage: `url(${currentBg})` }}>
            <div className='text-2xl py-20 text-[#FFFFFF] text-opacity-75 flex flex-col items-center justify-between'
                style={darkGlass}>
                <div className='w-full flex flex-col items-center gap-8'>
                    <FaRegUserCircle />
                    <IoSearch />
                </div>
                <div className='rotate-[-90deg] p-5'>
                    <p className='tracking-wider'>Travelor</p>
                </div>
                <div className='w-full flex flex-col items-center gap-8'>
                    <a><FaInstagram /></a>
                    <a><FaFacebookF /></a>
                    <a><FaTwitter /></a>
                </div>
            </div>
            <div className='flex flex-col p-20 gap-10 justify-center'>
                <p className='text-[100px] font-light leading-[85%] text-[#FFFFFF] text-opacity-75'>Adventure <br></br>awaits.<br></br>Let's go!</p>
                <div className='w-fit py-3 px-1 rounded-t-full rounded-b-full border-2 text-[#FFFFFF] text-opacity-75'>
                    <FaLongArrowAltDown size={24} />
                </div>
                <div className='text-[#FFFFFF] font-normal w-[250px]'>
                    <p className='text-white text-lg'>Forest stay</p>
                    <p className='mt-5 leading-4 font-light'>Integration with social media platforms for sharing travel plans and experiences.</p>
                    <p className='mt-5 leading-4 font-light'>Integration with social media platforms for sharing</p>
                </div>
            </div>
            <div className='flex flex-col ml-auto'>
                <div className='text-2xl py-10 text-[#FFFFFF] text-opacity-75 px-10'>
                    <IoMenu size={40} className='ml-auto' />
                </div>
                <div className='grid grid-cols-2 text-[#FFFFFF] text-opacity-75 h-fit mt-auto'>
                    <div className=''></div>
                    <button className='aspect-square  p-10' onClick={() => handleClick('Forest Stay')} style={lightGlass}>Forest Stay</button>
                    <button className='aspect-square' onClick={() => handleClick('Sunset')} style={lightGlass}>Sunset</button>
                    <button className='aspect-square' onClick={() => handleClick('Tree House')} style={darkGlass}>Tree House</button>
                    <button className='aspect-square' onClick={() => handleClick('Forest Track')} style={darkGlass}>Forest Track</button>
                    <button className='aspect-square' onClick={() => handleClick('Tracking')} style={lightGlass}>Tracking</button>
                </div>
            </div>
        </div>
    )
}

export default Template8