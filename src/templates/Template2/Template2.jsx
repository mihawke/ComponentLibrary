import React from 'react';
import background from './Background.png'
import card1Bg from './card1bg.png'
import card2Bg from './card2bg.jpg'
import card3Bg from './card3bg.png'
import { MdMenu } from 'react-icons/md'

function Template2() {
  return (
    <div className='min-h-screen'>
      <div className='h-screen flex flex-col text-white bg-cover p-8 bg-center relative' style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
        <div className="relative z-10 min-h-full flex flex-col justify-center items-center lg:items-start">
          {/* <header className='flex flex-row w-full justify-between p-8 items-center fixed top-0 z-20'> */}
          <header className='flex flex-row w-full justify-between items-center absolute top-0 z-10'>
            <p className='text-3xl text-white font-bold'>ARTJUNKS</p>
            <MdMenu className='w-9 h-9 md:hidden lg:hidden' />
            <ul className='md:flex lg:flex flex-row hidden  md:gap-x-4 lg:gap-x-9  lg:text-lg md:text-md text-white items-center'>
              <li className='hover:opacity-75 cursor-pointer'>Home</li>
              <li className='hover:opacity-75 cursor-pointer'>About</li>
              <li className='hover:opacity-75 cursor-pointer'>Artists</li>
              <li className='hover:opacity-75 cursor-pointer'>Careers</li>
              <li className='hover:opacity-75 cursor-pointer'>News</li>
              <li className='hover:opacity-75 cursor-pointer'>Company</li>
              <button className='hidden lg:inline-block border-[1px] px-7 py-2 rounded-[10px] hover:opacity-75'>Get started</button>
            </ul>
          </header>

          <main className='flex flex-row  md:w-[600px] lg:pl-20'>
            <div className='flex flex-col gap-y-8 h-full items-start'>
              <div className='w-20 h-[15px] bg-white'></div>
              <p className='w-full lg:w-[748px] text-white text-5xl lg:text-[60px] leading-snug'>Art pieces made easy accessible for everyone</p>
              <p className='w-full lg:w-[528px] text-white text-[18px] leading-[168.5%]'>Learn, buy and trade art pieces of your favorite artist around the world by using crypto currencies.</p>
              <button className='border-[1px] px-7 py-2 text-white rounded-[10px] hover:opacity-75'>Learn more</button>
            </div>
          </main>
        </div>
      </div>
      
      <footer className='flex flex-col md:min-h-screen p-8 lg:p-20 gap-y-11 items-center justify-center'>
                <h1 className='flex font-bold text-[20px] lg:text-4xl leading-none text-black'>Newest reads</h1>
                <div className='flex flex-col lg:w-full flex-wrap gap-y-10 md:flex-row md:gap-x-5 md:gap-y-10 md:justify-center lg:flex-row lg:gap-x-8 lg:gap-y-16 lg:justify-center'>

                    <div className='flex flex-col w-[300px] md:w-48 lg:w-[350px]'>
                        <div className='w-full h-60  lg:w-full lg:h-72 bg-cover relative rounded-md' style={{
                            backgroundImage: `url(${card1Bg})`,
                        }}>
                        </div>
                        <div className='flex flex-col p-8 border-[1px] border-t-0 relative h-64 justify-between'>
                            <p className='lg:text-[15px] md:text-[13px] font-medium text-gray-400'>5 August, 2022</p>
                            <p className=' font-bold text-[20px] md:text-[15px] lg:text-[25px] leading-none text-black'>France seeks to protect Russia's Morozov collection from seizure as masterpieces return home</p>
                            <button className='text-[15px] w-fit font-medium text-yellow-600 hover:opacity-75'>Read more</button>
                        </div>
                    </div>
                    <div className='flex flex-col w-[300px] md:w-48 lg:w-[350px]'>
                        <div className='w-full h-60  lg:w-full lg:h-72 bg-cover relative rounded-md' style={{
                            backgroundImage: `url(${card2Bg})`,
                        }}>
                        </div>
                        <div className='flex flex-col p-8 border-[1px] border-t-0 relative h-64 justify-between'>
                            <p className='lg:text-[15px] md:text-[13px] font-medium text-gray-400'>5 August, 2022</p>
                            <p className=' font-bold text-[20px] md:text-[15px] lg:text-[25px] leading-none text-black'>Picasso’s muse as sea creature—will it break $100m at Sotheby's New York sale?</p>
                            <button className='text-[15px] w-fit font-medium text-yellow-600 hover:opacity-75'>Read more</button>
                        </div>
                    </div>
                    <div className='flex flex-col w-[300px] md:w-48 lg:w-[350px]'>
                        <div className='w-full h-60  lg:w-full lg:h-72 bg-cover relative rounded-md' style={{
                            backgroundImage: `url(${card3Bg})`,
                        }}>
                        </div>
                        <div className='flex flex-col p-8 border-[1px] border-t-0 relative h-64 justify-between'>
                            <p className='lg:text-[15px] md:text-[13px] font-medium text-gray-400'>5 August, 2022</p>
                            <p className=' font-bold text-[20px] md:text-[15px] lg:text-[25px] leading-none text-black'>Venice Biennale 2022: all the national pavilions, artists and curators</p>
                            <button className='text-[15px] w-fit font-medium text-yellow-600 hover:opacity-75'>Read more</button>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  );
}

export default Template2;