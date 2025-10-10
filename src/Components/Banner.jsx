import React from 'react';
import Container from './Container';
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStoreIos } from "react-icons/fa";
import hero from "../assets/hero.png"

const Banner = () => {
    return (

        <div>
            <Container>
                <div className='pt-20'>
                    <h1 className='font-bold text-5xl md:text-7xl text-center'>We Build<br /> <span className='text-color1'>Productive</span> Apps</h1>
                    <p className='max-w-[70%] mx-auto text-center pt-4 text-xl text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                    <div className='flex justify-center gap-2'>
                        <a href='https://play.google.com/store/games?hl=en' className="btn flex items-center gap-2 bg-white text-black  border-2 border-gray-300 hover:bg-gray-100 mt-8">
                            <FaGooglePlay className="text-xl text-blue-400" />
                            Google Play
                        </a>
                        <a href='https://www.apple.com/app-store/' className="btn flex items-center gap-2 bg-white text-black  border-2 border-gray-300 hover:bg-gray-100 mt-8">
                            <FaAppStoreIos className="text-xl text-blue-400" />
                            App Store
                        </a>
                    </div>
                </div>

                <div className='flex justify-center items-center pt-8'>
                    <img src={hero} alt="" />
                </div>

            </Container>

            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <Container>
                    <h2 className='text-white font-bold text-xl md:text-5xl text-center pt-20 pb-10'>Trusted by Millions, Built for You</h2>
                    <div className='flex justify-center gap-10 md:gap-20 pb-20 flex-col md:flex-row'>
                        <div className='flex flex-col items-center  text-white'>
                            <h5 className='text-xl font-light'>Total Downloads</h5>
                            <h1 className='text-[4rem] font-bold'>29.6M</h1>
                            <h5 className='text-xl font-light'>21% more than last month</h5>
                        </div>

                        <div className='flex flex-col items-center  text-white'>
                            <h5 className='text-xl font-light'>Total Reviews</h5>
                            <h1 className='text-[4rem] font-bold'>906K</h1>
                            <h5 className='text-xl font-light'>46% more than last month</h5>
                        </div>
                        <div className='flex flex-col items-center  text-white'>
                            <h5 className='text-xl font-light'>Active Apps</h5>
                            <h1 className='text-[4rem] font-bold'>132+</h1>
                            <h5 className='text-xl font-light'>31 more will Launch</h5>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Banner;